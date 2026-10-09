import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Gotza";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="gotza" invitado={invitado} regalo={regaloDe("gotza")} />;
}
