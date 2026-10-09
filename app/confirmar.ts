"use server";

import { estaConfirmado, guardarConfirmacion } from "@/lib/confirmaciones";
import { GRUPOS_INVITADOS } from "@/lib/invitados";

// Acciones del botón "Confirmar asistencia" de cada invitación. Solo se
// aceptan enlaces que existen en la lista de invitados.
const esInvitado = (enlace: string) =>
  GRUPOS_INVITADOS.some((g) => g.invitados.some((i) => i.enlace === enlace));

export async function confirmarAsistencia(enlace: string): Promise<boolean> {
  if (!esInvitado(enlace)) return false;
  await guardarConfirmacion(enlace);
  return true;
}

export async function consultarConfirmacion(enlace: string): Promise<boolean> {
  if (!esInvitado(enlace)) return false;
  return estaConfirmado(enlace);
}
