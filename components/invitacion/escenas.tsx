"use client";

import { motion } from "motion/react";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import { BEBE, PAPAS } from "@/lib/invitacion";
import { Corazon, Esfera, EstrellaAzul, Liston, NubeBlanca, Sprite } from "./dibujos";
import { Escribir, Trazo } from "./texto";

// Todas las posiciones están en % del cuadro del video (9:16), medidas sobre
// los cuadros originales. `x`/`y` son el centro del elemento y `w` su ancho.
// Los tiempos (`retraso`) son segundos desde que empieza la escena.
function Pos({
  x,
  y,
  w,
  children,
  className,
  style,
}: {
  x: number;
  y: number;
  w?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className ?? ""}`}
      style={{ left: `${x}%`, top: `${y}%`, width: w ? `${w}%` : undefined, ...style }}
    >
      {children}
    </div>
  );
}

const SALE_SUAVE = [0.22, 1, 0.36, 1] as const;

function Aparece({
  retraso,
  duracion = 0.8,
  desde = {},
  className,
  children,
}: {
  retraso: number;
  duracion?: number;
  desde?: { y?: string; x?: string; scale?: number };
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...desde }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ delay: retraso, duration: duracion, ease: SALE_SUAVE }}
    >
      {children}
    </motion.div>
  );
}

function Salta({ retraso, children }: { retraso: number; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: retraso,
        opacity: { delay: retraso, duration: 0.2 },
        scale: { delay: retraso, type: "spring", stiffness: 260, damping: 14 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Flota({
  duracion = 4,
  distancia = "-1.2cqw",
  retraso = 0,
  children,
}: {
  duracion?: number;
  distancia?: string;
  retraso?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="flotar"
      style={
        { "--duracion": `${duracion}s`, "--flotar": distancia, animationDelay: `${retraso}s` } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

function Late({ duracion = 3, escala = 1.06, children }: { duracion?: number; escala?: number; children: ReactNode }) {
  return (
    <div className="latir" style={{ "--duracion": `${duracion}s`, "--latir": escala } as CSSProperties}>
      {children}
    </div>
  );
}

function EsferasEsquinas({ retraso, arriba }: { retraso: number; arriba: boolean }) {
  const esferas = [
    ...(arriba
      ? [
          { x: 13, y: 9.9, w: 12, n: 1 },
          { x: 87.4, y: 9.6, w: 12, n: 6 },
        ]
      : []),
    { x: 10.2, y: 90.1, w: 11.5, n: 2 },
    { x: 90.4, y: 90.1, w: 11.5, n: 3 },
  ];
  return esferas.map((e, i) => (
    <Pos key={i} x={e.x} y={e.y} w={e.w}>
      <Salta retraso={retraso + i * 0.08}>
        <Flota duracion={3.5 + i * 0.4} distancia="-0.8cqw" retraso={i * 0.3}>
          <Esfera estrellas={e.n} className="drop-shadow-[0_0.6cqw_0.8cqw_rgba(120,70,20,0.35)]" />
        </Flota>
      </Salta>
    </Pos>
  ));
}

const SCRIPT = "font-script font-medium text-azul-noche leading-none";
const MANO = "font-mano text-center";

// --- Escena 1 (0 s – 6.5 s): "La dulce espera está por terminar" ----------
export function Escena1() {
  return (
    <>
      <Pos x={50} y={26.9} w={46.3}>
        <svg viewBox="0 0 100 100" className="block overflow-visible">
          <motion.circle
            cx="50"
            cy="50"
            r="49.5"
            fill="none"
            stroke="var(--dorado)"
            strokeWidth="0.7"
            transform="rotate(-90 50 50)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.1, ease: "easeInOut" }}
          />
        </svg>
      </Pos>

      {[
        { x: 30.2, y: 18.2, w: 8.3 },
        { x: 71.3, y: 26, w: 9 },
        { x: 48.5, y: 40.4, w: 8 },
      ].map((c, i) => (
        <Pos key={i} x={c.x} y={c.y} w={c.w}>
          <Salta retraso={0.9 + i * 0.12}>
            <Late duracion={2.4 + i * 0.3} escala={1.1}>
              <Corazon />
            </Late>
          </Salta>
        </Pos>
      ))}
      {[
        { x: 58.3, y: 15.4, w: 4.6 },
        { x: 27.2, y: 30.5, w: 4.6 },
        { x: 64.8, y: 35.7, w: 5 },
      ].map((e, i) => (
        <Pos key={i} x={e.x} y={e.y} w={e.w}>
          <Salta retraso={1.05 + i * 0.12}>
            <Late duracion={2 + i * 0.4} escala={1.18}>
              <EstrellaAzul />
            </Late>
          </Salta>
        </Pos>
      ))}

      <Pos x={44.4} y={26.95} w={35.2}>
        <Aparece retraso={1.3} desde={{ scale: 0.9 }}>
          <Flota duracion={4.5}>
            <Sprite src="/img/fetal.webp" alt="Goku bebé dormido" />
          </Flota>
        </Aparece>
      </Pos>

      <Pos x={50} y={47} w={92}>
        <Escribir
          lineas={["LA DULCE ESPERA ESTÁ", "POR TERMINAR"]}
          inicio={1.4}
          paso={0.026}
          className="text-center font-serif text-[4.6cqw] leading-[1.22] text-cafe-gris"
        />
      </Pos>

      <Pos x={50} y={59.6} w={77.4}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.2 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.7, duration: 0.7, ease: SALE_SUAVE }}
        >
          <Liston className="block" />
        </motion.div>
      </Pos>
      <Pos x={50} y={57.3}>
        <Trazo inicio={3.1} duracion={0.9} className={`${SCRIPT} text-[8.6cqw]`}>
          {BEBE}
        </Trazo>
      </Pos>

      <Pos x={50} y={94.5} w={66}>
        <Aparece retraso={1.3} desde={{ y: "30%" }}>
          <NubeBlanca className="block" />
        </Aparece>
      </Pos>
      <Pos x={48.8} y={77.8} w={55.6}>
        <Aparece retraso={1.4} duracion={1} desde={{ y: "8%" }}>
          <Flota duracion={3.8} distancia="-0.8cqw">
            <Sprite src="/img/goku.webp" alt="Goku bebé tomando tetero" />
          </Flota>
        </Aparece>
      </Pos>

      <EsferasEsquinas retraso={1.3} arriba={false} />
    </>
  );
}

// --- Escena 2 (6.3 s – 12.7 s): "Mis papitos están felices…" --------------
export function Escena2() {
  return (
    <>
      <Pos x={50} y={34.1} w={92}>
        <Escribir
          lineas={[
            "Mis papitos están felices",
            "esperando mi llegada y",
            "quieren compartir contigo",
            "esta felicidad.",
          ]}
          inicio={0.2}
          paso={0.031}
          className={`${MANO} text-[5.6cqw] leading-[1.56] text-cafe`}
        />
      </Pos>

      <Pos x={50} y={52.6}>
        <motion.div
          initial={{ x: "-110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: SALE_SUAVE }}
        >
          <Trazo inicio={0} duracion={0.01} borrar className={`${SCRIPT} text-[15cqw]`}>
            {BEBE}
          </Trazo>
        </motion.div>
      </Pos>

      <Pos x={30} y={94.5} w={72}>
        <Aparece retraso={0.5} desde={{ y: "30%" }}>
          <NubeBlanca className="block" />
        </Aparece>
      </Pos>
      <Pos x={31.9} y={76.9} w={63.4}>
        <Aparece retraso={0.5} duracion={1} desde={{ y: "8%" }}>
          <Flota duracion={3.8} distancia="-0.8cqw">
            <Sprite src="/img/goku.webp" alt="Goku bebé tomando tetero" />
          </Flota>
        </Aparece>
      </Pos>

      <EsferasEsquinas retraso={0.5} arriba={false} />
    </>
  );
}

// --- Escena 3 (12.7 s – 22.6 s): "…tienen el honor de invitarte a mi Baby Shower"
export function Escena3() {
  return (
    <>
      <Pos x={50} y={23.3} w={33.3}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            opacity: { delay: 0.3, duration: 0.25 },
            scale: { delay: 0.3, type: "spring", stiffness: 140, damping: 9 },
          }}
        >
          <Late duracion={2.6} escala={1.06}>
            <Sprite src="/img/shen.webp" alt="Shenlong con una esfera del dragón" />
          </Late>
        </motion.div>
      </Pos>

      <EsferasEsquinas retraso={0.7} arriba />

      <Pos x={50} y={44} w={92}>
        <Escribir
          lineas={[`Mis papitos  ${PAPAS}`, "tienen el honor de", "invitarte a mi"]}
          inicio={0.8}
          paso={0.045}
          className={`${MANO} text-[5.4cqw] leading-[1.42] text-cafe`}
        />
      </Pos>

      <Pos x={50} y={58.9}>
        <Trazo inicio={2.3} duracion={1.7} className={`${SCRIPT} text-[15.5cqw]`}>
          Baby Shower
        </Trazo>
      </Pos>

      <Pos x={50} y={80.9} w={48.6}>
        <motion.div
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { delay: 0.8, duration: 1 },
            scale: { delay: 0.8, duration: 8, ease: "linear" },
          }}
        >
          <Sprite src="/img/egg.webp" alt="Goku bebé dormido en un capullo de luz" />
        </motion.div>
      </Pos>
    </>
  );
}

// --- Escena 4 (22.6 s – 38 s): datos del evento ----------------------------
export function Escena4() {
  return (
    <>
      <Pos x={57} y={16.3} w={55}>
        <motion.div
          initial={{ y: "-120%" }}
          animate={{ y: 0 }}
          exit={{ y: "-130%", transition: { duration: 0.9, ease: "easeIn" } }}
          transition={{ delay: 0.6, duration: 3.2, ease: SALE_SUAVE }}
        >
          <div className="mecer" style={{ "--mecer": "-7cqw", "--duracion": "8s" } as CSSProperties}>
            <Flota duracion={3} distancia="-1.4cqw">
              <div className="relative aspect-[317/322]">
                <Sprite
                  src="/img/nimbus.webp"
                  alt=""
                  className="absolute"
                  style={{ left: "2.2%", top: "57.1%", width: "97.8%" }}
                />
                <Sprite
                  src="/img/goku.webp"
                  alt="Goku bebé en la nube voladora"
                  className="absolute"
                  style={{ left: 0, top: 0, width: "68.5%" }}
                />
              </div>
            </Flota>
          </div>
        </motion.div>
      </Pos>

      <EsferasEsquinas retraso={0.4} arriba />

      <Pos x={50} y={37}>
        <Trazo inicio={0.4} duracion={0.9} borrar className={`${SCRIPT} text-[12.5cqw]`}>
          {BEBE}
        </Trazo>
      </Pos>

      <Pos x={50} y={45.4} w={96}>
        <Escribir
          lineas={[
            "Pronto estaré con ustedes pero ahorita Diosito",
            "aún me está pintando mis ojitos, mis manitas y",
            "mis piecitos, por ese motivo mis papás...",
          ]}
          inicio={0.5}
          paso={0.008}
          className={`${MANO} text-[4.05cqw] leading-[1.32] text-cafe`}
        />
      </Pos>

      <Pos x={50} y={53.6} w={100}>
        <Escribir
          lineas={[PAPAS]}
          inicio={0.9}
          paso={0.03}
          className={`${MANO} text-[7cqw] leading-none text-azul-noche`}
        />
      </Pos>

      <Pos x={50} y={59.3} w={96}>
        <Escribir
          lineas={["Tienen el gusto de invitarte a compartir", "con nosotros antes de mi llegada"]}
          inicio={1}
          paso={0.012}
          className={`${MANO} text-[4.05cqw] leading-[1.32] text-cafe`}
        />
      </Pos>

      <Pos x={50} y={66.8} w={100} className="aspect-[100/7.8]">
        {[16.3, 58.5].map((izquierda) =>
          ["0%", "100%"].map((arriba) => (
            <motion.span
              key={`${izquierda}-${arriba}`}
              className="absolute h-[0.42cqw] bg-dorado"
              style={{ left: `${izquierda}%`, top: arriba, width: "27.6%", y: "-50%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.7, ease: SALE_SUAVE }}
            />
          )),
        )}
        <Pos x={30.1} y={50}>
          <Escribir lineas={["DOMINGO"]} inicio={1.2} paso={0.04} className="font-mano text-[5.4cqw] text-azul-noche" />
        </Pos>
        <Pos x={51.2} y={46}>
          <Escribir lineas={["28"]} inicio={1.3} paso={0.08} className="font-mano text-[12.5cqw] leading-none text-azul-noche" />
        </Pos>
        <Pos x={72.3} y={50}>
          <Escribir lineas={["8:30 PM"]} inicio={1.35} paso={0.04} className="font-mano text-[5.4cqw] text-azul-noche" />
        </Pos>
      </Pos>

      <Pos x={50} y={71.5}>
        <Escribir lineas={["NOVIEMBRE"]} inicio={1.5} paso={0.04} className="font-mano text-[4.9cqw] tracking-[0.04em] text-cafe" />
      </Pos>

      <Pos x={50} y={78.1} w={100}>
        <div className="flex items-start justify-center gap-[2cqw] font-mano text-[4.8cqw] leading-[1.2]">
          <Escribir lineas={["LUGAR:"]} inicio={1.6} paso={0.03} className="text-cafe" />
          <Escribir
            lineas={["Salón de Eventos", "“Mundo Mágico”"]}
            inicio={1.75}
            paso={0.025}
            className="text-center text-azul-noche"
          />
        </div>
      </Pos>

      <Pos x={41.7} y={93} w={31}>
        <motion.div
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "70%", transition: { duration: 0.8, ease: "easeIn" } }}
          transition={{ delay: 0.4, duration: 1.8, ease: SALE_SUAVE }}
        >
          <div className="mecer" style={{ "--mecer": "13.7cqw", "--duracion": "10s" } as CSSProperties}>
            <Late duracion={2.6} escala={1.04}>
              <Sprite src="/img/shen.webp" alt="Shenlong" />
            </Late>
          </div>
        </motion.div>
      </Pos>
    </>
  );
}

// --- Escena 5 (38 s – final): "¡Te esperamos!" -----------------------------
const ANGULOS = [-119, -47, 25, 97, 169];
const ESTRELLAS_ANILLO = [4, 5, 6, 2, 7];

export function Escena5({ regalo }: { regalo?: string }) {
  // Con regalo se sube todo un poco para que quepa debajo, sin tocar las nubes.
  const dy = regalo ? -6 : 0;
  const centroY = 40.1 + dy;
  return (
    <>
      <Pos x={50} y={centroY} w={76}>
        <svg viewBox="0 0 100 100" className="block overflow-visible">
          {[49.5, 44.5].map((r) => (
            <motion.circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="var(--dorado)"
              strokeWidth="0.35"
              transform="rotate(-90 50 50)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </Pos>

      {ANGULOS.map((angulo, i) => {
        const rad = (angulo * Math.PI) / 180;
        // Radio del anillo: 37% del ancho. En alto, el % se ajusta por 9/16.
        const dx = 37 * Math.cos(rad);
        const dyAnillo = 37 * Math.sin(rad);
        return (
          <Pos key={angulo} x={50 + dx} y={centroY + dyAnillo * (9 / 16)} w={10.2}>
            <motion.div
              initial={{ x: `${(-dx / 10.2) * 100}%`, y: `${(-dyAnillo / 10.2) * 100}%`, scale: 0.3, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease: SALE_SUAVE }}
            >
              <Late duracion={2.2 + i * 0.25} escala={1.08}>
                <Esfera
                  estrellas={ESTRELLAS_ANILLO[i]}
                  className="drop-shadow-[0_0.5cqw_0.8cqw_rgba(120,70,20,0.35)]"
                />
              </Late>
            </motion.div>
          </Pos>
        );
      })}

      <Pos x={49.4} y={43.1 + dy} w={59.9}>
        <Aparece retraso={0.9} duracion={0.9} desde={{ scale: 0.94 }}>
          <Flota duracion={4}>
            <Sprite src="/img/goku.webp" alt="Goku bebé tomando tetero" />
          </Flota>
        </Aparece>
      </Pos>

      <Pos x={50} y={68.2 + dy}>
        <Trazo inicio={0.5} duracion={1.1} className={`${SCRIPT} text-[15cqw]`}>
          ¡Te esperamos!
        </Trazo>
      </Pos>

      <Pos x={50} y={80.2 + dy} w={100}>
        <Escribir
          lineas={["¡No olvides mi regalito!"]}
          inicio={1}
          paso={0.035}
          className={`${MANO} text-[6cqw] text-azul-noche`}
        />
      </Pos>

      {regalo && (
        <Pos x={50} y={81.5} w={84}>
          <Aparece retraso={2} duracion={0.7} desde={{ scale: 0.85 }}>
            <p className="rounded-[4cqw] border-[0.4cqw] border-dorado bg-white/75 px-[4cqw] py-[1.6cqw] text-center font-mano text-[5.4cqw] leading-[1.25] text-cafe shadow-[0_1cqw_3cqw_rgba(70,105,143,0.25)]">
              {regalo}
            </p>
          </Aparece>
        </Pos>
      )}
    </>
  );
}

export const ESCENAS_COMPONENTES: ComponentType<{ regalo?: string }>[] = [
  Escena1,
  Escena2,
  Escena3,
  Escena4,
  Escena5,
];
