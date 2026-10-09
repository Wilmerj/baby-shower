import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Oscar Gaitan, esposa e hijo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="oscar-gaitan" invitado={invitado} regalo={regaloDe("oscar-gaitan")} />;
}
