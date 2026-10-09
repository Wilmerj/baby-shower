import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Marta Gaitan";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="marta-gaitan" invitado={invitado} regalo={regaloDe("marta-gaitan")} />;
}
