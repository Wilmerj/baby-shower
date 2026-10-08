import type { Metadata } from "next";
import { BEBE, esPlural } from "./invitacion";

// Título y descripción que se ven en la vista previa al compartir el enlace.
// No definir `openGraph` aquí: reemplazaría la imagen de app/opengraph-image.
export function metadataInvitado(invitado: string): Metadata {
  return {
    title: `${invitado}, ${esPlural(invitado) ? "los" : "te"} invitamos al Baby Shower de ${BEBE}`,
    description: "Toca el enlace para ver tu invitación",
  };
}
