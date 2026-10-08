import type { Metadata } from "next";
import { evento, fechaCorta } from "./evento";

// Título y descripción que se ven en la vista previa al compartir el enlace.
// No definir `openGraph` aquí: reemplazaría la imagen de app/opengraph-image.
export function metadataInvitado(invitado: string): Metadata {
  return {
    title: `${invitado}, te invitamos al Baby Shower de ${evento.bebe}`,
    description: `${fechaCorta(evento.inicio)} · ${evento.lugar}`,
  };
}
