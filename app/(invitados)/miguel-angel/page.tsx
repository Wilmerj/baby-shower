import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Miguel Ángel y acompañante";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="miguel-angel" invitado={invitado} regalo={regaloDe("miguel-angel")} />;
}
