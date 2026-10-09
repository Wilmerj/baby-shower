"use client";

import { useState } from "react";
import { quitarConfirmacion, salir } from "@/app/acciones";
import type { GRUPOS_INVITADOS } from "@/lib/invitados";

type Vista = "todos" | "confirmados" | "pendientes";

const VISTAS: { valor: Vista; texto: string }[] = [
  { valor: "todos", texto: "Todos" },
  { valor: "confirmados", texto: "Confirmados" },
  { valor: "pendientes", texto: "Pendientes" },
];

const formatoFecha = new Intl.DateTimeFormat("es-CO", {
  timeZone: "America/Bogota",
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "2-digit",
});

const sinTildes = (texto: string) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// La lista llega como prop desde app/page.tsx (solo con la cookie de acceso),
// no se importa aquí, para que no quede dentro del JavaScript del navegador.
export function ListaInvitados({
  grupos: todos,
  confirmados,
}: {
  grupos: typeof GRUPOS_INVITADOS;
  /** Enlace → fecha (ISO) de quienes confirmaron asistencia. */
  confirmados: Record<string, string>;
}) {
  const [filtro, setFiltro] = useState("");
  const [vista, setVista] = useState<Vista>("todos");
  const [copiado, setCopiado] = useState<string | null>(null);
  // Confirmaciones quitadas en esta visita: se ocultan de inmediato aunque la
  // lista del KV tarde unos segundos en reflejar el borrado.
  const [quitados, setQuitados] = useState<Set<string>>(() => new Set());
  const [quitando, setQuitando] = useState<string | null>(null);

  const confirmo = (enlace: string) => enlace in confirmados && !quitados.has(enlace);

  async function quitar(enlace: string, nombre: string) {
    if (!window.confirm(`¿Quitar la confirmación de ${nombre}?`)) return;
    setQuitando(enlace);
    try {
      if (await quitarConfirmacion(enlace)) setQuitados((antes) => new Set(antes).add(enlace));
      else window.alert("No se pudo quitar. Vuelve a entrar con la contraseña.");
    } catch {
      window.alert("No se pudo quitar. Intenta de nuevo.");
    } finally {
      setQuitando(null);
    }
  }

  const buscar = sinTildes(filtro.trim());
  const grupos = todos.map((g) => ({
    ...g,
    invitados: g.invitados.filter(
      (i) =>
        sinTildes(i.nombre).includes(buscar) &&
        (vista === "todos" || (vista === "confirmados") === confirmo(i.enlace)),
    ),
  })).filter((g) => g.invitados.length > 0);
  const total = todos.reduce((n, g) => n + g.invitados.length, 0);
  const totalConfirmados = todos.reduce(
    (n, g) => n + g.invitados.filter((i) => confirmo(i.enlace)).length,
    0,
  );

  async function copiar(enlace: string) {
    await navigator.clipboard.writeText(`${location.origin}/${enlace}`);
    setCopiado(enlace);
    setTimeout(() => setCopiado((actual) => (actual === enlace ? null : actual)), 1500);
  }

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[var(--cielo)] font-mano text-azul-noche">
      <div className="mx-auto max-w-xl px-4 py-8">
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-script text-5xl font-medium">Invitados</h1>
          <form action={salir}>
            <button
              type="submit"
              className="mt-2 rounded-full border border-azul-noche/30 px-3 py-1.5 text-sm hover:bg-azul-noche/5"
            >
              Salir
            </button>
          </form>
        </div>
        <p className="mt-1 text-lg text-cafe">
          {total} invitaciones · <span className="text-azul-noche">{totalConfirmados} confirmaron</span>
        </p>

        <input
          type="search"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Buscar invitado…"
          className="mt-5 w-full rounded-full border border-dorado/60 bg-white/80 px-5 py-3 text-lg outline-none focus:border-azul-noche"
        />

        <div className="mt-3 flex gap-2">
          {VISTAS.map((v) => (
            <button
              key={v.valor}
              type="button"
              onClick={() => setVista(v.valor)}
              aria-pressed={vista === v.valor}
              className={`rounded-full px-4 py-1.5 text-base ${
                vista === v.valor ? "bg-azul-noche text-white" : "border border-azul-noche/30 bg-white/60"
              }`}
            >
              {v.texto}
            </button>
          ))}
        </div>

        {grupos.map((g) => (
          <section key={g.grupo} className="mt-8">
            <h2 className="text-xl text-cafe">{g.grupo}</h2>
            <ul className="mt-2 divide-y divide-azul-noche/10 overflow-hidden rounded-2xl bg-white/80 shadow-sm">
              {g.invitados.map((i) => (
                <li key={i.enlace} className="flex items-center gap-3 px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <a href={`/${i.enlace}`} target="_blank" rel="noopener noreferrer" className="block">
                      <span className="block text-lg leading-tight">{i.nombre}</span>
                      <span className="block truncate text-sm text-cafe">/{i.enlace}</span>
                      {i.regalo && (
                        <span className="block text-sm leading-snug text-cafe">🎁 {i.regalo}</span>
                      )}
                    </a>
                    {confirmo(i.enlace) && (
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-dorado/20 px-2 py-0.5 text-sm text-azul-noche">
                          ✓ Confirmó
                          {confirmados[i.enlace] && ` · ${formatoFecha.format(new Date(confirmados[i.enlace]))}`}
                        </span>
                        <button
                          type="button"
                          onClick={() => quitar(i.enlace, i.nombre)}
                          disabled={quitando === i.enlace}
                          className="text-sm text-cafe underline underline-offset-2 hover:text-azul-noche disabled:opacity-60"
                        >
                          {quitando === i.enlace ? "Quitando…" : "Quitar"}
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => copiar(i.enlace)}
                    className="shrink-0 rounded-full border border-azul-noche/30 px-3 py-1.5 text-sm hover:bg-azul-noche/5"
                  >
                    {copiado === i.enlace ? "¡Copiado!" : "Copiar"}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {grupos.length === 0 && <p className="mt-8 text-center text-cafe">No hay invitados en esta vista.</p>}
      </div>
    </div>
  );
}
