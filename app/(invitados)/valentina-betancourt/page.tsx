import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Valentina Betancourt";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="valentina-betancourt" invitado={invitado} regalo={regaloDe("valentina-betancourt")} />;
}
