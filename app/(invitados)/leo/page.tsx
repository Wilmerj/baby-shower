import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Leo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="leo" invitado={invitado} regalo={regaloDe("leo")} />;
}
