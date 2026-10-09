import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Carol Gaitan";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="carol-gaitan" invitado={invitado} regalo={regaloDe("carol-gaitan")} />;
}
