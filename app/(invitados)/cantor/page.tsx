import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Cantor";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="cantor" invitado={invitado} regalo={regaloDe("cantor")} />;
}
