import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Luis y esposa";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="luis" invitado={invitado} regalo={regaloDe("luis")} />;
}
