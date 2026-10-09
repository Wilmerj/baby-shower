import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tía Myriam";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tia-myriam" invitado={invitado} regalo={regaloDe("tia-myriam")} />;
}
