import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Moisa, esposa e hijo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="moisa" invitado={invitado} regalo={regaloDe("moisa")} />;
}
