import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Yadira Gaitan e hijas";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="yadira-gaitan" invitado={invitado} regalo={regaloDe("yadira-gaitan")} />;
}
