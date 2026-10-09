import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tía Blanca";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tia-blanca" invitado={invitado} regalo={regaloDe("tia-blanca")} />;
}
