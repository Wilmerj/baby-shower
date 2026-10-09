import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Leidy y novia";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="leidy" invitado={invitado} regalo={regaloDe("leidy")} />;
}
