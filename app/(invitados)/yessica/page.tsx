import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Yessica";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="yessica" invitado={invitado} regalo={regaloDe("yessica")} />;
}
