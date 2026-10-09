import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Sebastian";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="sebastian" invitado={invitado} regalo={regaloDe("sebastian")} />;
}
