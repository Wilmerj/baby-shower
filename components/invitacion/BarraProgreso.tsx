"use client";

import { motion, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type Props = {
  /** Segundo actual del video; lo escribe el bucle de la invitación. */
  tiempo: MotionValue<number>;
  duracion: number;
  /** Pide saltar al segundo `t`. `final` es false mientras se arrastra. */
  alBuscar: (t: number, opciones: { final: boolean }) => void;
};

const PASO = 5;

function formato(t: number) {
  const s = Math.max(0, Math.floor(t));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function BarraProgreso({ tiempo, duracion, alBuscar }: Props) {
  const pista = useRef<HTMLDivElement>(null);
  const arrastrando = useRef(false);
  const ultimo = useRef(0);
  // Solo el segundo entero entra al estado: el componente se renderiza una
  // vez por segundo, no por cuadro. El relleno y el thumb usan el MotionValue.
  const [segundo, setSegundo] = useState(0);
  useMotionValueEvent(tiempo, "change", (t) => {
    const s = Math.floor(t);
    if (s !== segundo) setSegundo(s);
  });
  const ancho = useTransform(tiempo, (t) => `${Math.min(Math.max(t / duracion, 0), 1) * 100}%`);

  // Segundo bajo el puntero, dentro de [0, duracion - 0.1].
  function tiempoDe(e: PointerEvent) {
    const caja = pista.current!.getBoundingClientRect();
    const fraccion = Math.min(Math.max((e.clientX - caja.left) / caja.width, 0), 1);
    return Math.min(fraccion * duracion, duracion - 0.1);
  }

  function alBajar(e: PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    arrastrando.current = true;
    ultimo.current = tiempoDe(e);
    alBuscar(ultimo.current, { final: false });
  }
  function alMover(e: PointerEvent) {
    if (!arrastrando.current) return;
    ultimo.current = tiempoDe(e);
    alBuscar(ultimo.current, { final: false });
  }
  function alSoltar(e: PointerEvent) {
    if (!arrastrando.current) return;
    arrastrando.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    alBuscar(ultimo.current, { final: true });
  }

  function alTeclear(e: KeyboardEvent) {
    const actual = tiempo.get();
    const destino =
      e.key === "ArrowLeft" || e.key === "ArrowDown"
        ? actual - PASO
        : e.key === "ArrowRight" || e.key === "ArrowUp"
          ? actual + PASO
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? duracion
              : null;
    if (destino === null) return;
    e.preventDefault();
    alBuscar(Math.min(Math.max(destino, 0), duracion - 0.1), { final: true });
  }

  return (
    // Pegada abajo, sobre el área segura; el toque no pausa la invitación.
    <div
      data-barra
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-x-0 bottom-[max(env(safe-area-inset-bottom),4px)] flex justify-center px-3"
    >
      <div className="flex h-10 w-[min(var(--ancho),32rem)] items-center gap-2.5 font-mano text-sm text-azul-noche">
        <span className="w-9 text-right tabular-nums">{formato(segundo)}</span>
        <div
          ref={pista}
          role="slider"
          tabIndex={0}
          aria-label="Posición del video"
          aria-valuemin={0}
          aria-valuemax={duracion}
          aria-valuenow={segundo}
          aria-valuetext={`${formato(segundo)} de ${formato(duracion)}`}
          onPointerDown={alBajar}
          onPointerMove={alMover}
          onPointerUp={alSoltar}
          onPointerCancel={alSoltar}
          onKeyDown={alTeclear}
          className="relative flex h-10 flex-1 cursor-pointer touch-none items-center outline-none"
        >
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/50 backdrop-blur-sm">
            <motion.div className="h-full bg-dorado" style={{ width: ancho }} />
          </div>
          <motion.div
            className="pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-dorado shadow"
            style={{ left: ancho }}
          />
        </div>
        <span className="w-9 tabular-nums">{formato(duracion)}</span>
      </div>
    </div>
  );
}
