import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tania y Carlos";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tania-y-carlos" invitado={invitado} regalo={regaloDe("tania-y-carlos")} />;
}
