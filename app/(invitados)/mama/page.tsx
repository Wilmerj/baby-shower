import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Mamá";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="mama" invitado={invitado} regalo={regaloDe("mama")} />;
}
