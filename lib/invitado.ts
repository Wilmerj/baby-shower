// Busca un invitado por su enlace en lib/invitados.ts, la única fuente de
// nombres y regalos. La usa la ruta dinámica app/[enlace]/page.tsx.
import "server-only";

import { GRUPOS_INVITADOS } from "./invitados";

export function buscarInvitado(enlace: string): { nombre: string; regalo: string } | undefined {
  for (const { invitados } of GRUPOS_INVITADOS) {
    const invitado = invitados.find((i) => i.enlace === enlace);
    if (invitado) return { nombre: invitado.nombre, regalo: invitado.regalo };
  }
}

export function todosLosEnlaces(): string[] {
  return GRUPOS_INVITADOS.flatMap((g) => g.invitados.map((i) => i.enlace));
}
