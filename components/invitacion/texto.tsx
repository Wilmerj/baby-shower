"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// Texto que aparece letra por letra, como en el video. Los saltos de línea son
// los mismos del video; cada palabra se mantiene unida.
export function Escribir({
  lineas,
  inicio,
  paso = 0.03,
  className,
}: {
  lineas: string[];
  inicio: number;
  paso?: number;
  className?: string;
}) {
  let n = 0;
  return (
    <div className={className}>
      {lineas.map((linea, i) => (
        <span key={i} className="block">
          {linea.split(" ").map((palabra, j) => (
            <span key={j}>
              {j > 0 && " "}
              <span className="inline-block whitespace-nowrap">
                {[...palabra].map((letra, k) => (
                  <motion.span
                    key={k}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: inicio + n++ * paso, duration: 0.2 }}
                  >
                    {letra}
                  </motion.span>
                ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

// Letra cursiva que se "escribe" de izquierda a derecha. Con `borrar`, al
// salir de la escena se borra en la misma dirección.
export function Trazo({
  inicio,
  duracion,
  borrar = false,
  className,
  children,
}: {
  inicio: number;
  duracion: number;
  borrar?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`px-[6cqw] py-[3cqw] whitespace-nowrap ${className ?? ""}`}
      initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={
        borrar
          ? { clipPath: "inset(0% 0% 0% 100%)", transition: { duration: 0.7, ease: "easeIn" } }
          : undefined
      }
      transition={{ delay: inicio, duration: duracion, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
