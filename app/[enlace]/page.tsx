import type { Metadata } from "next";
import { Invitacion } from "@/components/invitacion/Invitacion";
import { buscarInvitado, todosLosEnlaces } from "@/lib/invitado";
import { metadataInvitado } from "@/lib/metadata";

// Una sola página para todos los invitados: /<enlace> lo busca en
// lib/invitados.ts. Los enlaces de la lista se generan al compilar; uno que no
// esté muestra la invitación sin nombre ni regalo.
export function generateStaticParams() {
  return todosLosEnlaces().map((enlace) => ({ enlace }));
}

export async function generateMetadata({ params }: PageProps<"/[enlace]">): Promise<Metadata> {
  const invitado = buscarInvitado((await params).enlace);
  return invitado ? metadataInvitado(invitado.nombre) : {};
}

export default async function Page({ params }: PageProps<"/[enlace]">) {
  const { enlace } = await params;
  const invitado = buscarInvitado(enlace);
  if (!invitado) return <Invitacion />;
  return <Invitacion enlace={enlace} invitado={invitado.nombre} regalo={invitado.regalo} />;
}
