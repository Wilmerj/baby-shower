import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Edu Piña";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="edu-pina" invitado={invitado} regalo={regaloDe("edu-pina")} />;
}
