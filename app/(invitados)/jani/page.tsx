import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Jani y esposo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="jani" invitado={invitado} regalo={regaloDe("jani")} />;
}
