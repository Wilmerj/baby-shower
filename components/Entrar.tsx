"use client";

import { useActionState } from "react";
import { entrar } from "@/app/acciones";

// Pantalla de acceso a la lista de invitados. La clave se valida en el servidor
// (app/acciones.ts); este componente solo muestra el formulario y el error.
export function Entrar() {
  const [estado, accion, enviando] = useActionState(entrar, { error: false });

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[var(--cielo)] font-mano text-azul-noche">
      <div className="mx-auto flex min-h-full max-w-sm flex-col justify-center px-4 py-8">
        <h1 className="text-center font-script text-6xl font-medium">Invitados</h1>
        <p className="mt-2 text-center text-lg text-cafe">Escribe la contraseña para ver la lista</p>

        <form action={accion} className="mt-6 flex flex-col gap-3">
          <label htmlFor="clave" className="sr-only">
            Contraseña
          </label>
          <input
            id="clave"
            name="clave"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder="Contraseña"
            aria-invalid={estado.error}
            aria-describedby={estado.error ? "clave-error" : undefined}
            className="w-full rounded-full border border-dorado/60 bg-white/80 px-5 py-3 text-lg outline-none focus:border-azul-noche"
          />
          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-full bg-azul-noche px-5 py-3 text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {enviando ? "Entrando…" : "Entrar"}
          </button>
          {estado.error && !enviando && (
            <p id="clave-error" role="alert" className="text-center text-lg text-cafe">
              Contraseña incorrecta, intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
