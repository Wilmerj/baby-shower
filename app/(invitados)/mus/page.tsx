import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Mus";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="mus" invitado={invitado} regalo={regaloDe("mus")} />;
}
