import type { Metadata } from "next";
import { FECHA, esPlural } from "./invitacion";

// Título y descripción que se ven en la vista previa al compartir el enlace.
// La imagen sale de app/opengraph-image.jpg; no definir `openGraph` aquí
// porque la reemplazaría.
export function metadataInvitado(invitado: string): Metadata {
  return {
    title: `Invitación: ${invitado}`,
    description: `${esPlural(invitado) ? "Los" : "Te"} invito a mi baby shower ${FECHA}`,
  };
}
