import type { Metadata } from "next";
import { Entrar } from "@/components/Entrar";
import { ListaInvitados } from "@/components/ListaInvitados";
import { tieneAcceso } from "@/lib/acceso";
import { GRUPOS_INVITADOS } from "@/lib/invitados";

// Página privada: enlaces a la invitación de cada invitado. Sin la cookie de
// acceso (lib/acceso.ts) solo se renderiza el formulario de la clave, así que
// la lista no llega al navegador.
export const metadata: Metadata = {
  title: "Invitados",
};

export default async function Home() {
  if (!(await tieneAcceso())) return <Entrar />;
  return <ListaInvitados grupos={GRUPOS_INVITADOS} />;
}
