"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { CLAVE, COOKIE_ACCESO, DURACION_ACCESO, tieneAcceso, tokenAcceso } from "@/lib/acceso";
import { borrarConfirmacion } from "@/lib/confirmaciones";

type EstadoEntrar = { error: boolean };

const opciones = { httpOnly: true, secure: true, sameSite: "lax", path: "/" } as const;

// Al poner o borrar la cookie, Next vuelve a renderizar `/` en la misma
// respuesta: con la cookie sale la lista, sin ella la pantalla de acceso.
export async function entrar(_estado: EstadoEntrar, datos: FormData): Promise<EstadoEntrar> {
  if (datos.get("clave") !== CLAVE) return { error: true };

  (await cookies()).set(COOKIE_ACCESO, await tokenAcceso(), { ...opciones, maxAge: DURACION_ACCESO });
  return { error: false };
}

// Desde la lista privada: solo con la cookie de acceso. Después se vuelve a
// renderizar `/` para que la lista traiga las confirmaciones actualizadas.
export async function quitarConfirmacion(enlace: string): Promise<boolean> {
  if (!(await tieneAcceso())) return false;
  await borrarConfirmacion(enlace);
  revalidatePath("/");
  return true;
}

export async function salir() {
  (await cookies()).delete({ name: COOKIE_ACCESO, ...opciones });
}
