import type { Metadata } from "next";
import { ListaInvitados } from "@/components/ListaInvitados";

// Página privada (ver proxy.ts): enlaces a la invitación de cada invitado.
export const metadata: Metadata = {
  title: "Invitados",
};

export default function Home() {
  return <ListaInvitados />;
}
