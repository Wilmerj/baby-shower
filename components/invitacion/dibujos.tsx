/* eslint-disable @next/next/no-img-element -- los sprites ya vienen optimizados en public/img */
import { useId, type CSSProperties } from "react";

// Generador pseudoaleatorio con semilla: el servidor y el navegador dibujan
// exactamente las mismas nubes y destellos.
function aleatorio(semilla: number) {
  return () => {
    semilla = (semilla + 0x6d2b79f5) | 0;
    let t = Math.imul(semilla ^ (semilla >>> 15), 1 | semilla);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Sprite({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      decoding="async"
      className={`block h-auto w-full select-none ${className ?? ""}`}
      style={style}
    />
  );
}

// --- Nubes de papel (bandas de arriba y abajo) -----------------------------

const ANCHO_NUBES = 2400;
const ALTO_NUBES = 210;

function bordeNube(semilla: number, base: number, amplitud: number, rMin: number, rMax: number) {
  const r = aleatorio(semilla);
  let x = ANCHO_NUBES + 80;
  let d = `M-80,-40 L${x},-40 L${x},${(base + (r() - 0.5) * amplitud).toFixed(1)}`;
  while (x > -80) {
    const radio = rMin + r() * (rMax - rMin);
    x -= radio * 2;
    const y = base + (r() - 0.5) * amplitud;
    const arco = (radio * 1.12).toFixed(1);
    d += ` A${arco},${arco} 0 0 1 ${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return `${d} L-80,-40 Z`;
}

const CAPAS_NUBES = [
  { base: 170, amplitud: 18, rMin: 26, rMax: 48, color: "#c3dbee", mecer: 14, duracion: 13 },
  { base: 142, amplitud: 24, rMin: 34, rMax: 66, color: "#f4f2ec", mecer: -18, duracion: 11 },
  { base: 112, amplitud: 20, rMin: 30, rMax: 58, color: "#d4e6f4", mecer: 16, duracion: 9 },
  { base: 82, amplitud: 22, rMin: 40, rMax: 72, color: "#fbfaf7", mecer: -12, duracion: 12 },
  { base: 48, amplitud: 18, rMin: 30, rMax: 56, color: "#dcebf7", mecer: 10, duracion: 10 },
];

export function BandaNubes({ lado }: { lado: "arriba" | "abajo" }) {
  const abajo = lado === "abajo";
  const semilla = abajo ? 101 : 7;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${abajo ? "bottom-0" : "top-0"}`}
      style={{ height: `calc(var(--u) * ${ALTO_NUBES})` }}
    >
      {CAPAS_NUBES.map((capa, i) => (
        <svg
          key={i}
          viewBox={`0 0 ${ANCHO_NUBES} ${ALTO_NUBES}`}
          preserveAspectRatio="xMidYMin slice"
          className="mecer absolute top-0 h-full"
          style={
            {
              left: "-48px",
              width: "calc(100% + 96px)",
              "--mecer": `calc(var(--u) * ${capa.mecer})`,
              "--duracion": `${capa.duracion}s`,
              filter: `drop-shadow(0 calc(var(--u) * ${abajo ? -2.5 : 2.5}) calc(var(--u) * 2.5) rgba(70, 105, 143, 0.45))`,
            } as CSSProperties
          }
        >
          <path
            d={bordeNube(semilla + i * 13, capa.base, capa.amplitud, capa.rMin, capa.rMax)}
            fill={capa.color}
            transform={abajo ? `translate(0 ${ALTO_NUBES}) scale(1 -1)` : undefined}
          />
        </svg>
      ))}
    </div>
  );
}

// --- Destellos del fondo ---------------------------------------------------

const DESTELLO = "M0-10Q0 0 10 0Q0 0 0 10Q0 0-10 0Q0 0 0-10Z";

const DESTELLOS = (() => {
  const r = aleatorio(42);
  return Array.from({ length: 22 }, () => ({
    x: 4 + r() * 92,
    y: 14 + r() * 72,
    tamano: 0.8 + r() * 1.6,
    retraso: r() * 4,
    duracion: 2.4 + r() * 2.2,
  }));
})();

export function Destellos() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 100 177.8">
      {DESTELLOS.map((d, i) => (
        <path
          key={i}
          d={DESTELLO}
          fill="white"
          className="titilar"
          transform={`translate(${d.x} ${d.y * 1.778}) scale(${d.tamano / 10})`}
          style={{ animationDelay: `${d.retraso}s`, "--duracion": `${d.duracion}s` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

// --- Esferas del dragón ----------------------------------------------------

const POSICION_ESTRELLAS: Record<number, [number, number][]> = {
  1: [[50, 54]],
  2: [[41, 50], [59, 60]],
  3: [[50, 40], [39, 62], [61, 62]],
  4: [[40, 42], [60, 42], [40, 63], [60, 63]],
  5: [[50, 36], [36, 49], [64, 49], [42, 67], [58, 67]],
  6: [[38, 40], [50, 34], [62, 40], [38, 61], [50, 67], [62, 61]],
  7: [[50, 31], [37, 42], [63, 42], [50, 52], [37, 63], [63, 63], [50, 73]],
};

const ESTRELLA_ROJA = "M0,-9 L2.6,-3.2 L8.6,-2.8 L4,1.2 L5.4,7.3 L0,4 L-5.4,7.3 L-4,1.2 L-8.6,-2.8 L-2.6,-3.2Z";

export function Esfera({ estrellas, className }: { estrellas: number; className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${id}-g`} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#fff3c2" />
          <stop offset="22%" stopColor="#ffc24a" />
          <stop offset="58%" stopColor="#f7921c" />
          <stop offset="88%" stopColor="#dc650c" />
          <stop offset="100%" stopColor="#bf530a" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill={`url(#${id}-g)`} stroke="#c4600f" strokeWidth="1.5" />
      {POSICION_ESTRELLAS[estrellas].map(([x, y], i) => (
        <path
          key={i}
          d={ESTRELLA_ROJA}
          transform={`translate(${x} ${y}) scale(${estrellas > 4 ? 0.85 : 1})`}
          fill="#d6261c"
          stroke="#9e1a12"
          strokeWidth="0.8"
        />
      ))}
      <ellipse cx="33" cy="26" rx="13" ry="7.5" fill="white" opacity="0.75" transform="rotate(-32 33 26)" />
      <circle cx="70" cy="74" r="3" fill="white" opacity="0.45" />
    </svg>
  );
}

// --- Adornos de la escena 1 ------------------------------------------------

export function Corazon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden>
      <path
        d="M50 88C20 64 2 46 2 26 2 12 13 2 27 2c10 0 18 6 23 14C55 8 63 2 73 2c14 0 25 10 25 24 0 20-18 38-48 62Z"
        fill="#e69b04"
      />
    </svg>
  );
}

export function EstrellaAzul({ className }: { className?: string }) {
  return (
    <svg viewBox="-12 -12 24 24" className={className} aria-hidden>
      <path
        d="M0,-11 L3.2,-3.8 L10.5,-3.4 L4.9,1.5 L6.6,8.9 L0,4.9 L-6.6,8.9 L-4.9,1.5 L-10.5,-3.4 L-3.2,-3.8Z"
        fill="#8dd0fc"
        stroke="#6dbbf0"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Liston({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 420 140" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-centro`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d9e8f6" />
        </linearGradient>
        <linearGradient id={`${id}-punta`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dce9f6" />
          <stop offset="100%" stopColor="#aac8e6" />
        </linearGradient>
      </defs>
      <g stroke="#8fb0d4" strokeWidth="1.6" strokeLinejoin="round">
        {/* puntas traseras */}
        <path d="M4 70 L78 58 L78 124 L4 134 L30 102 Z" fill={`url(#${id}-punta)`} />
        <path d="M416 70 L342 58 L342 124 L416 134 L390 102 Z" fill={`url(#${id}-punta)`} />
        {/* dobleces */}
        <path d="M54 96 L78 124 L78 100 Z" fill="#9dbcdc" />
        <path d="M366 96 L342 124 L342 100 Z" fill="#9dbcdc" />
        {/* banda principal con una leve ondulación */}
        <path
          d="M54 34 C130 10 200 44 260 26 C305 13 340 20 366 34 L366 96 C340 82 305 75 260 88 C200 106 130 72 54 96 Z"
          fill={`url(#${id}-centro)`}
        />
      </g>
    </svg>
  );
}

// Nube blanca esponjosa donde se sienta Goku en las escenas 1 y 2.
export function NubeBlanca({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" className={className} aria-hidden>
      <g fill="#ffffff" style={{ filter: "drop-shadow(0 3px 4px rgba(70,105,143,0.3))" }}>
        <circle cx="52" cy="62" r="34" />
        <circle cx="104" cy="44" r="40" />
        <circle cx="164" cy="40" r="44" />
        <circle cx="222" cy="52" r="36" />
        <circle cx="262" cy="68" r="28" />
        <rect x="20" y="60" width="268" height="38" rx="19" />
      </g>
      <g fill="#e8f1f9">
        <ellipse cx="150" cy="88" rx="118" ry="9" />
      </g>
    </svg>
  );
}
