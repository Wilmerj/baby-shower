"use server";

import { cookies } from "next/headers";
import { CLAVE, COOKIE_ACCESO, DURACION_ACCESO, tokenAcceso } from "@/lib/acceso";

type EstadoEntrar = { error: boolean };

const opciones = { httpOnly: true, secure: true, sameSite: "lax", path: "/" } as const;

// Al poner o borrar la cookie, Next vuelve a renderizar `/` en la misma
// respuesta: con la cookie sale la lista, sin ella la pantalla de acceso.
export async function entrar(_estado: EstadoEntrar, datos: FormData): Promise<EstadoEntrar> {
  if (datos.get("clave") !== CLAVE) return { error: true };

  (await cookies()).set(COOKIE_ACCESO, await tokenAcceso(), { ...opciones, maxAge: DURACION_ACCESO });
  return { error: false };
}

export async function salir() {
  (await cookies()).delete({ name: COOKIE_ACCESO, ...opciones });
}
