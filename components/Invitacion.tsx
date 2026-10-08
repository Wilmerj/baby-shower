import type { ReactNode } from "react";
import {
  anio,
  calendarioUrl,
  confirmarUrl,
  dia,
  diaSemana,
  evento,
  fechaCorta,
  hora,
  mapaUrl,
  mes,
} from "@/lib/evento";

type Props = {
  /** Nombre que aparece en grande, p. ej. "Tía Marta" o "Familia Pérez". */
  invitado?: string;
  /** Línea pequeña sobre el nombre. */
  saludo?: string;
  /** Texto personalizado. Acepta párrafos con JSX. */
  mensaje?: ReactNode;
};

const MENSAJE_POR_DEFECTO =
  "Pronto llegará nuestro bebé y no imaginamos celebrarlo sin ti. Nos encantaría que nos acompañes a darle la bienvenida con mucho amor.";

export function Invitacion({
  invitado,
  saludo = "Una invitación especial para",
  mensaje = MENSAJE_POR_DEFECTO,
}: Props) {
  return (
    <main className="relative flex min-h-dvh justify-center overflow-hidden px-4 py-10 sm:py-16">
      <Fondo />

      <article className="relative w-full max-w-md rounded-[2rem] bg-papel px-6 pt-10 pb-12 text-center shadow-[0_20px_60px_-25px_rgba(75,66,57,0.35)] sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-dorado/40"
        />

        <Aparece retraso={0}>
          <p className="text-xs font-semibold tracking-[0.35em] text-tenue uppercase">
            Baby Shower
          </p>
        </Aparece>

        <Aparece retraso={150}>
          <Arco />
        </Aparece>

        {invitado && (
          <Aparece retraso={300}>
            <p className="mt-8 font-serif text-lg text-tenue italic">
              {saludo}
            </p>
            <h1 className="mt-1 font-script text-5xl leading-tight text-acento sm:text-6xl">
              {invitado}
            </h1>
          </Aparece>
        )}

        <Aparece retraso={450}>
          <div className="mt-5 space-y-3 font-serif text-xl leading-relaxed text-tinta">
            {typeof mensaje === "string" ? <p>{mensaje}</p> : mensaje}
          </div>
        </Aparece>

        <Aparece retraso={600}>
          <Divisor />
          <p className="text-xs font-semibold tracking-[0.3em] text-tenue uppercase">
            Celebremos la llegada de
          </p>
          <p className="mt-2 font-serif text-4xl font-medium text-tinta italic">
            {evento.bebe}
          </p>
        </Aparece>

        <Aparece retraso={750}>
          <div className="mt-8 flex items-center justify-center gap-3 font-serif text-tinta">
            <span className="flex-1 border-y border-dorado/50 py-1.5 text-sm tracking-[0.15em] uppercase">
              {diaSemana(evento.inicio)}
            </span>
            <span className="text-6xl leading-none font-medium">
              {dia(evento.inicio)}
            </span>
            <span className="flex-1 border-y border-dorado/50 py-1.5 text-sm tracking-[0.15em] uppercase">
              {mes(evento.inicio)}
            </span>
          </div>
          <p className="mt-3 text-sm tracking-[0.25em] text-tenue uppercase">
            {anio(evento.inicio)} · {hora(evento.inicio)}
          </p>
        </Aparece>

        <Aparece retraso={900}>
          <div className="mt-8 flex flex-col items-center gap-1">
            <IconoLugar />
            <p className="mt-1 font-serif text-2xl font-medium text-tinta">
              {evento.lugar}
            </p>
            <p className="text-sm text-tenue">{evento.direccion}</p>
          </div>
        </Aparece>

        <Aparece retraso={1050}>
          <div className="mt-9 flex flex-col gap-3">
            <a
              href={confirmarUrl(invitado)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-acento px-6 py-3.5 text-sm font-semibold tracking-[0.15em] text-white uppercase transition hover:brightness-95 active:scale-[0.98]"
            >
              Confirmar asistencia
            </a>
            <div className="grid grid-cols-2 gap-3">
              <BotonSecundario href={mapaUrl()}>Cómo llegar</BotonSecundario>
              <BotonSecundario href={calendarioUrl()}>
                Agendar
              </BotonSecundario>
            </div>
          </div>
          <p className="mt-4 text-xs text-tenue">
            Por favor confirma antes del {fechaCorta(evento.confirmarAntesDe)}
          </p>
        </Aparece>

        <Aparece retraso={1200}>
          <Divisor />
          <p className="font-serif text-lg text-tenue italic">Con amor,</p>
          <p className="mt-1 font-script text-4xl text-tinta">
            {evento.anfitriones}
          </p>
        </Aparece>
      </article>
    </main>
  );
}

function Aparece({
  retraso,
  children,
}: {
  retraso: number;
  children: ReactNode;
}) {
  return (
    <div
      className="motion-safe:animate-aparecer"
      style={{ animationDelay: `${retraso}ms` }}
    >
      {children}
    </div>
  );
}

function BotonSecundario({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-acento/60 px-4 py-3 text-xs font-semibold tracking-[0.15em] text-acento uppercase transition hover:bg-acento-suave active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

function Divisor() {
  return (
    <div
      aria-hidden
      className="my-8 flex items-center justify-center gap-3 text-dorado"
    >
      <span className="h-px w-16 bg-dorado/50" />
      <svg viewBox="-10 -10 20 20" className="size-3.5 fill-current">
        <path d={DESTELLO} />
      </svg>
      <span className="h-px w-16 bg-dorado/50" />
    </div>
  );
}

// Estrella de cuatro puntas centrada en el origen, de radio 10.
const DESTELLO = "M0-10Q0 0 10 0Q0 0 0 10Q0 0-10 0Q0 0 0-10Z";

function Destello({
  x,
  y,
  tamano,
  retraso = 0,
}: {
  x: number;
  y: number;
  tamano: number;
  retraso?: number;
}) {
  return (
    <path
      d={DESTELLO}
      transform={`translate(${x} ${y}) scale(${tamano / 10})`}
      className="motion-safe:animate-titilar"
      style={{ animationDelay: `${retraso}ms` }}
    />
  );
}

// Ventana en forma de arco con una luna y una nube.
function Arco() {
  return (
    <div className="mx-auto mt-6 h-56 w-44 overflow-hidden rounded-t-full border border-dorado/40 bg-acento-suave p-1.5">
      <svg
        viewBox="0 0 160 200"
        className="size-full"
        role="img"
        aria-label="Luna sobre una nube"
      >
        <defs>
          <mask id="luna-creciente">
            <rect width="160" height="200" fill="white" />
            <circle cx="98" cy="74" r="36" fill="black" />
          </mask>
        </defs>

        <g className="fill-dorado">
          <Destello x={36} y={46} tamano={6} />
          <Destello x={124} y={40} tamano={4} retraso={900} />
          <Destello x={132} y={104} tamano={5} retraso={1800} />
          <Destello x={28} y={112} tamano={3.5} retraso={600} />
        </g>

        <g className="motion-safe:animate-flotar">
          <circle
            cx="80"
            cy="88"
            r="40"
            className="fill-dorado"
            mask="url(#luna-creciente)"
          />
          <g className="fill-papel">
            <circle cx="56" cy="148" r="20" />
            <circle cx="84" cy="136" r="26" />
            <circle cx="112" cy="150" r="18" />
            <rect x="36" y="146" width="96" height="22" rx="11" />
          </g>
        </g>

        <g className="fill-papel opacity-60">
          <circle cx="10" cy="204" r="26" />
          <circle cx="50" cy="196" r="22" />
          <circle cx="92" cy="206" r="28" />
          <circle cx="138" cy="196" r="24" />
          <circle cx="168" cy="206" r="20" />
        </g>
      </svg>
    </div>
  );
}

function IconoLugar() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-6 fill-none stroke-dorado"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

// Nubes y destellos difusos detrás de la tarjeta.
function Fondo() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 800"
    >
      <g className="fill-papel opacity-70">
        <Nube x={-30} y={70} escala={1.3} />
        <Nube x={290} y={260} escala={1} />
        <Nube x={-50} y={560} escala={1.1} />
        <Nube x={280} y={700} escala={1.4} />
      </g>
      <g className="fill-dorado opacity-60">
        <Destello x={340} y={60} tamano={7} retraso={300} />
        <Destello x={40} y={330} tamano={5} retraso={1500} />
        <Destello x={370} y={480} tamano={6} retraso={800} />
        <Destello x={60} y={740} tamano={7} retraso={2100} />
      </g>
    </svg>
  );
}

function Nube({ x, y, escala }: { x: number; y: number; escala: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${escala})`}>
      <circle cx="30" cy="30" r="22" />
      <circle cx="60" cy="20" r="28" />
      <circle cx="90" cy="32" r="20" />
      <rect x="10" y="30" width="100" height="22" rx="11" />
    </g>
  );
}
