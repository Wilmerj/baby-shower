"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform, type MotionValue } from "motion/react";
import { useEffect, useEffectEvent, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { DURACION, escenaEn, esPlural } from "@/lib/invitacion";
import { BandaNubes, Destellos, Esfera, Sprite } from "./dibujos";
import { ESCENAS_COMPONENTES } from "./escenas";

type Props = {
  /** Nombre del invitado; sale en la portada antes de abrir la invitación. */
  invitado?: string;
  /** Regalo sugerido; sale al final, debajo de "¡No olvides mi regalito!". */
  regalo?: string;
};

const AUDIO = "/audio/cancion.m4a";
const IMAGENES = ["goku", "fetal", "egg", "shen", "nimbus", "decoracion"];
// En qué segundo de cada escena aparecen los adornos de los costados.
const RETRASO_ADORNOS = [1.2, 0.4, 0.6, 0.4];

// Si nadie toca la portada, la invitación se abre sola. La cuenta empieza
// cuando la portada terminó de aparecer (segundo PORTADA_LISTA) y dura ESPERA
// segundos; se ve como el borde dorado que rodea "Toca para abrir".
const PORTADA_LISTA = 1.3;
const ESPERA = 4;

// La píldora "Toca para abrir" mide siempre lo mismo en cqw; así su borde de
// progreso usa un viewBox fijo (1 unidad = 1cqw) y escala junto con ella.
const PILDORA = { ancho: 44, alto: 13 };
const BORDE_PILDORA = bordeRedondeado(PILDORA.ancho, PILDORA.alto, 1.5);

// El "cuadro" del video: 9:16, lo más grande que quepa en la pantalla.
// --u equivale a 1px del video original (576 px de ancho).
const LIENZO: CSSProperties & Record<string, string> = {
  "--ancho": "min(100vw, calc(100dvh * 9 / 16))",
  "--u": "calc(var(--ancho) / 576)",
  background: "linear-gradient(180deg, var(--cielo-arriba), var(--cielo) 45%, var(--cielo-abajo))",
};
const CUADRO =
  "absolute left-1/2 top-1/2 aspect-[9/16] w-[var(--ancho)] -translate-x-1/2 -translate-y-1/2 [container-type:inline-size]";

export function Invitacion({ invitado, regalo }: Props) {
  const [abierta, setAbierta] = useState(false);
  const [escena, setEscena] = useState(-1);
  const [terminada, setTerminada] = useState(false);
  // La animación corre sin música: el navegador no dejó sonarla (se abrió
  // sola, sin un toque) o no arrancó a tiempo.
  const [sinMusica, setSinMusica] = useState(false);
  const [vuelta, setVuelta] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);
  // Reloj de la animación: sigue a la música; si el navegador no deja
  // reproducirla, avanza solo.
  const reloj = useRef({ inicio: 0, conAudio: true, desde: 0 });
  // Numera los intentos de sonar la música: la respuesta tardía de un play()
  // viejo no debe pisar a uno más nuevo.
  const intento = useRef(0);
  // Cuenta regresiva de la portada, de 0 a 1.
  const espera = useMotionValue(0);

  useEffect(() => {
    for (const nombre of IMAGENES) new Image().src = `/img/${nombre}.webp`;
  }, []);

  // Se descarga la canción completa y se reproduce desde memoria: así Safari
  // (iPhone) no depende de que el servidor responda por rangos de bytes.
  useEffect(() => {
    let url = "";
    fetch(AUDIO)
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((blob) => {
        const pista = audio.current;
        url = URL.createObjectURL(blob);
        if (pista && pista.paused && pista.currentTime === 0) pista.src = url;
      })
      .catch(() => {});
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  // Si nadie toca la portada, se abre sola al llenarse el borde. Con la
  // pestaña oculta no cuenta: al volver empieza de nuevo, para que no se abra
  // mientras nadie la ve.
  const abrirSola = useEffectEvent(() => reproducir());
  useEffect(() => {
    if (abierta) return;
    let cuenta: { stop: () => void } | undefined;
    const contar = (retraso: number) => {
      cuenta?.stop();
      cuenta = undefined;
      espera.set(0);
      if (document.hidden) return;
      cuenta = animate(espera, 1, {
        delay: retraso,
        duration: ESPERA,
        ease: "linear",
        onComplete: () => abrirSola(),
      });
    };
    const alCambiarVisibilidad = () => contar(0.4);
    contar(PORTADA_LISTA);
    document.addEventListener("visibilitychange", alCambiarVisibilidad);
    return () => {
      document.removeEventListener("visibilitychange", alCambiarVisibilidad);
      cuenta?.stop();
    };
  }, [abierta, espera]);

  useEffect(() => {
    if (!abierta) return;
    let cuadro = 0;
    const avanzar = () => {
      const { inicio, conAudio, desde } = reloj.current;
      const pista = audio.current;
      // Si la música no arranca en 2 s, la animación sigue sin ella. Se pausa
      // para que no entre tarde y desfasada; el botón de sonido la recupera.
      if (conAudio && pista && pista.currentTime <= desde && performance.now() - inicio > (desde + 2) * 1000) {
        reloj.current.conAudio = false;
        pista.pause();
        setSinMusica(true);
      }
      // Mientras la música no llega a `desde` (todavía no suena), la animación
      // la espera ahí en vez de retroceder.
      const t =
        reloj.current.conAudio && pista ? Math.max(pista.currentTime, desde) : (performance.now() - inicio) / 1000;
      setEscena(escenaEn(t));
      if (t >= DURACION - 0.05 || audio.current?.ended) setTerminada(true);
      else cuadro = requestAnimationFrame(avanzar);
    };
    cuadro = requestAnimationFrame(avanzar);
    return () => cancelAnimationFrame(cuadro);
  }, [abierta, vuelta]);

  function reproducir() {
    // ?t=22 en la URL arranca desde ese segundo; sirve para revisar una escena.
    const desde = Number(new URLSearchParams(location.search).get("t")) || 0;
    sonarDesde(desde);
    setTerminada(false);
    setEscena(-1);
    setVuelta((v) => v + 1);
    setAbierta(true);
  }

  // Pone el reloj en el segundo `desde` e intenta que la música suene ahí.
  // play() tiene que llamarse directo en un toque para que iOS lo permita;
  // fuera de un toque (cuando se abre sola) el navegador casi siempre lo
  // bloquea: la animación sigue con su reloj y se pide encender el sonido.
  function sonarDesde(desde: number) {
    reloj.current = { inicio: performance.now() - desde * 1000, conAudio: true, desde };
    const este = ++intento.current;
    const sinSonido = () => {
      if (este !== intento.current) return;
      reloj.current.conAudio = false;
      setSinMusica(true);
    };
    setSinMusica(false);
    const pista = audio.current;
    if (!pista) return sinSonido();
    pista.currentTime = desde;
    pista.play().then(() => {
      // Si el audio aún no había cargado, el navegador pudo ignorar el salto.
      if (este === intento.current && pista.currentTime < desde - 0.5) pista.currentTime = desde;
    }, sinSonido);
  }

  // Arrancó sin música: un toque la enciende en el segundo en que va la
  // animación y el reloj vuelve a seguirla.
  function encenderMusica() {
    sonarDesde((performance.now() - reloj.current.inicio) / 1000);
  }

  const pedirSonido = sinMusica && !terminada;

  // Sin música, tocar cualquier parte de la pantalla (que no sea un botón)
  // también la enciende.
  function alTocarPantalla(e: MouseEvent) {
    if (pedirSonido && !(e.target as Element).closest("button")) encenderMusica();
  }

  const EscenaActual = escena >= 0 ? ESCENAS_COMPONENTES[escena] : null;

  return (
    <main className="fixed inset-0 overflow-hidden" style={LIENZO} onClick={alTocarPantalla}>
      <audio ref={audio} src={AUDIO} preload="auto" playsInline />

      <div className={CUADRO}>
        <Destellos />
        <AnimatePresence>
          {escena >= 0 && escena <= 3 && (
            <motion.div
              key={`${vuelta}-${escena}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: RETRASO_ADORNOS[escena], duration: 0.8 } }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              <Sprite src="/img/decoracion.webp" alt="" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BandaNubes lado="arriba" />
      <BandaNubes lado="abajo" />

      <div className={CUADRO}>
        <AnimatePresence>
          {EscenaActual && (
            <motion.div
              key={`${vuelta}-${escena}`}
              className="absolute inset-0"
              exit={{ opacity: 0, transition: { duration: 0.7 } }}
            >
              <EscenaActual regalo={regalo} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {abierta && (
        <div className="absolute top-[max(env(safe-area-inset-top),12px)] right-3 flex gap-2">
          <AnimatePresence>
            {terminada && (
              <motion.button
                type="button"
                onClick={reproducir}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="rounded-full bg-white/80 px-4 py-2 font-mano text-base text-azul-noche shadow-md backdrop-blur"
              >
                ↻ Ver de nuevo
              </motion.button>
            )}
          </AnimatePresence>
          {/* La música no se puede apagar: este botón solo aparece cuando el
              navegador no la dejó sonar, para encenderla. */}
          <AnimatePresence>
            {pedirSonido && (
              <motion.button
                type="button"
                onClick={encenderMusica}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative flex h-10 items-center gap-1.5 rounded-full bg-white/80 px-3 font-mano text-base text-azul-noche shadow-md backdrop-blur"
              >
                <span aria-hidden className="llamar pointer-events-none absolute inset-0 rounded-full" />
                <IconoSonido />
                Activar sonido
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {!abierta && (
          <motion.button
            type="button"
            onClick={reproducir}
            className="absolute inset-0 cursor-pointer"
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            aria-label="Abrir la invitación"
          >
            <Portada invitado={invitado} espera={espera} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}

function Portada({ invitado, espera }: { invitado?: string; espera: MotionValue<number> }) {
  // La punta redonda del trazo dibujaría un punto antes de que arranque la cuenta.
  const opacidadTrazo = useTransform(espera, [0, 0.005], [0, 1]);
  return (
    <div className={CUADRO}>
      <div className="absolute inset-x-0 top-[30%] flex flex-col items-center text-center">
        <motion.div
          className="w-[22%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 11, delay: 0.2 }}
        >
          <div className="latir" style={{ "--duracion": "2.2s", "--latir": 1.08 } as CSSProperties}>
            <Esfera estrellas={4} className="drop-shadow-[0_1cqw_1.5cqw_rgba(120,70,20,0.35)]" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-[6cqw] px-[6cqw]"
        >
          {invitado ? (
            <>
              <p className="font-mano text-[6cqw] text-cafe">¡Hola!</p>
              <p
                className="mt-[1cqw] font-script font-medium leading-[1.05] text-balance text-azul-noche"
                style={{ fontSize: `${tamanoNombre(invitado)}cqw` }}
              >
                {invitado}
              </p>
              <p className="mt-[2cqw] font-mano text-[5.4cqw] text-cafe">
                {esPlural(invitado) ? "tienen" : "tienes"} una invitación especial
              </p>
            </>
          ) : (
            <p className="font-script text-[12cqw] leading-[1.1] text-azul-noche">Tienes una invitación especial</p>
          )}
        </motion.div>
        {/* Termina de aparecer en PORTADA_LISTA, justo cuando arranca la cuenta. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: PORTADA_LISTA - 0.5, duration: 0.5 }}
          className="mt-[9cqw]"
        >
          <div className="latir relative" style={{ "--duracion": "2.4s", "--latir": 1.035 } as CSSProperties}>
            <span
              className="grid place-items-center whitespace-nowrap rounded-full bg-azul-noche font-mano text-[5cqw] text-white shadow-lg"
              style={{ width: `${PILDORA.ancho}cqw`, height: `${PILDORA.alto}cqw` }}
            >
              Toca para abrir
            </span>
            <svg
              viewBox={`0 0 ${PILDORA.ancho} ${PILDORA.alto}`}
              className="pointer-events-none absolute inset-0 size-full overflow-visible"
              fill="none"
              strokeWidth={0.9}
              aria-hidden
            >
              <path d={BORDE_PILDORA} stroke="white" strokeOpacity={0.75} />
              <motion.path
                d={BORDE_PILDORA}
                stroke="var(--dorado)"
                strokeLinecap="round"
                style={{ pathLength: espera, opacity: opacidadTrazo }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Contorno de puntas redondas a `separacion` del borde de una píldora de
// ancho × alto. Empieza arriba al centro y va en el sentido del reloj, así se
// llena como un cronómetro.
function bordeRedondeado(ancho: number, alto: number, separacion: number) {
  const arriba = -separacion;
  const abajo = alto + separacion;
  const r = (abajo - arriba) / 2;
  const izquierda = r - separacion;
  const derecha = ancho + separacion - r;
  return `M ${ancho / 2} ${arriba} H ${derecha} A ${r} ${r} 0 0 1 ${derecha} ${abajo} H ${izquierda} A ${r} ${r} 0 0 1 ${izquierda} ${arriba} Z`;
}

// Los nombres largos ("Cristian Gaitan, acompañante e hijos") se achican para
// no ocupar más de dos líneas.
function tamanoNombre(invitado: string) {
  if (invitado.length <= 12) return 14;
  if (invitado.length <= 22) return 11.5;
  return 9.5;
}

function IconoSonido() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}
