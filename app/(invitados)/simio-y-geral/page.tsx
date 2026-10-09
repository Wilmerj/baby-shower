import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Simio y Geral";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="simio-y-geral" invitado={invitado} regalo={regaloDe("simio-y-geral")} />;
}
