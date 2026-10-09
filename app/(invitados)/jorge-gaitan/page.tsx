import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Jorge Gaitan e hija";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="jorge-gaitan" invitado={invitado} regalo={regaloDe("jorge-gaitan")} />;
}
