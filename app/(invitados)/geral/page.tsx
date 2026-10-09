import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Geral, esposo y 3 hijos";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="geral" invitado={invitado} regalo={regaloDe("geral")} />;
}
