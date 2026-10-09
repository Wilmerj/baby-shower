import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Juanfe y Jules";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="juanfe-y-jules" invitado={invitado} regalo={regaloDe("juanfe-y-jules")} />;
}
