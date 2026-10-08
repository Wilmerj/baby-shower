import "server-only";
import { cookies } from "next/headers";

// Acceso a la lista privada de la raíz. La clave solo vive en el servidor; el
// navegador guarda un token derivado de ella en una cookie httpOnly.
export const CLAVE = "bombe2027";
export const COOKIE_ACCESO = "acceso-invitados";
export const DURACION_ACCESO = 60 * 60 * 24 * 30; // 30 días, en segundos

export async function tokenAcceso(): Promise<string> {
  const datos = new TextEncoder().encode(`lista-invitados:${CLAVE}`);
  const hash = await crypto.subtle.digest("SHA-256", datos);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function tieneAcceso(): Promise<boolean> {
  const cookie = (await cookies()).get(COOKIE_ACCESO)?.value;
  return cookie === (await tokenAcceso());
}
