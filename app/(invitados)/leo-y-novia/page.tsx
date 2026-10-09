import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Leo y novia";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="leo-y-novia" invitado={invitado} regalo={regaloDe("leo-y-novia")} />;
}
