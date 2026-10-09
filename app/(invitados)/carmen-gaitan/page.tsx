import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Carmen Gaitan";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="carmen-gaitan" invitado={invitado} regalo={regaloDe("carmen-gaitan")} />;
}
