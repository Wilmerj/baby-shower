import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Valentina y esposo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="valentina" invitado={invitado} regalo={regaloDe("valentina")} />;
}
