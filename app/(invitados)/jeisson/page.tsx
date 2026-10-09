import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Jeisson y novia";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="jeisson" invitado={invitado} regalo={regaloDe("jeisson")} />;
}
