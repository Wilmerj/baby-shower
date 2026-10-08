"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { DURACION, escenaEn, esPlural } from "@/lib/invitacion";
import { BandaNubes, Destellos, Esfera, Sprite } from "./dibujos";
import { ESCENAS_COMPONENTES } from "./escenas";

type Props = {
  /** Nombre del invitado; sale en la portada antes de abrir la invitación. */
  invitado?: string;
  /** Regalo sugerido; sale al final, debajo de "¡No olvides mi regalito!". */
  regalo?: string;
};

const IMAGENES = ["goku", "fetal", "egg", "shen", "nimbus", "decoracion"];
// En qué segundo de cada escena aparecen los adornos de los costados.
const RETRASO_ADORNOS = [1.2, 0.4, 0.6, 0.4];

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
  const [silencio, setSilencio] = useState(false);
  const [vuelta, setVuelta] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);
  // Reloj de la animación: sigue a la música; si el navegador no deja
  // reproducirla, avanza solo.
  const reloj = useRef({ inicio: 0, conAudio: true });

  useEffect(() => {
    for (const nombre of IMAGENES) new Image().src = `/img/${nombre}.webp`;
  }, []);

  useEffect(() => {
    if (!abierta) return;
    let cuadro = 0;
    const avanzar = () => {
      const { inicio, conAudio } = reloj.current;
      const t = conAudio && audio.current ? audio.current.currentTime : (performance.now() - inicio) / 1000;
      setEscena(escenaEn(t));
      if (t >= DURACION - 0.05 || audio.current?.ended) setTerminada(true);
      else cuadro = requestAnimationFrame(avanzar);
    };
    cuadro = requestAnimationFrame(avanzar);
    return () => cancelAnimationFrame(cuadro);
  }, [abierta, vuelta]);

  // play() tiene que llamarse directo en el toque para que iOS lo permita.
  function reproducir() {
    // ?t=22 en la URL arranca desde ese segundo; sirve para revisar una escena.
    const desde = Number(new URLSearchParams(location.search).get("t")) || 0;
    reloj.current = { inicio: performance.now() - desde * 1000, conAudio: true };
    const pista = audio.current;
    if (pista) {
      pista.currentTime = desde;
      pista.play().catch(() => {
        reloj.current = { inicio: performance.now() - desde * 1000, conAudio: false };
      });
    } else {
      reloj.current.conAudio = false;
    }
    setTerminada(false);
    setEscena(-1);
    setVuelta((v) => v + 1);
    setAbierta(true);
  }

  function alternarSonido() {
    if (!audio.current) return;
    audio.current.muted = !silencio;
    setSilencio(!silencio);
  }

  const EscenaActual = escena >= 0 ? ESCENAS_COMPONENTES[escena] : null;

  return (
    <main className="fixed inset-0 overflow-hidden" style={LIENZO}>
      <audio ref={audio} src="/audio/cancion.m4a" preload="auto" playsInline />

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
          <button
            type="button"
            onClick={alternarSonido}
            aria-label={silencio ? "Activar sonido" : "Silenciar"}
            className="grid size-10 place-items-center rounded-full bg-white/80 text-azul-noche shadow-md backdrop-blur"
          >
            <IconoSonido silencio={silencio} />
          </button>
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
            <Portada invitado={invitado} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}

function Portada({ invitado }: { invitado?: string }) {
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
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.55, 1] }}
          transition={{ delay: 1.2, duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
          className="mt-[9cqw] rounded-full bg-azul-noche px-[7cqw] py-[2.6cqw] font-mano text-[5cqw] text-white shadow-lg"
        >
          Toca para abrir
        </motion.span>
      </div>
    </div>
  );
}

// Los nombres largos ("Cristian Gaitan, acompañante e hijos") se achican para
// no ocupar más de dos líneas.
function tamanoNombre(invitado: string) {
  if (invitado.length <= 12) return 14;
  if (invitado.length <= 22) return 11.5;
  return 9.5;
}

function IconoSonido({ silencio }: { silencio: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
      {silencio ? (
        <path d="m22 9-6 6m0-6 6 6" />
      ) : (
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      )}
    </svg>
  );
}
