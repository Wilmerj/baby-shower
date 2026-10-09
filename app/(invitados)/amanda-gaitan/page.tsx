import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Amanda Gaitan";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="amanda-gaitan" invitado={invitado} regalo={regaloDe("amanda-gaitan")} />;
}
