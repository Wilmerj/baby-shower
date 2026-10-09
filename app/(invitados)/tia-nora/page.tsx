import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tía Nora, Alef y Juliana";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tia-nora" invitado={invitado} regalo={regaloDe("tia-nora")} />;
}
