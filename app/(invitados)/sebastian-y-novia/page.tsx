import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Sebastian y novia";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="sebastian-y-novia" invitado={invitado} regalo={regaloDe("sebastian-y-novia")} />;
}
