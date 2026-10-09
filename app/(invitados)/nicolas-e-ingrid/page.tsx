import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Nicolas e Ingrid Gaitan";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="nicolas-e-ingrid" invitado={invitado} regalo={regaloDe("nicolas-e-ingrid")} />;
}
