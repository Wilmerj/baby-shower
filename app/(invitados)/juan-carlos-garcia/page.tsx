import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Juan Carlos Garcia y esposa";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="juan-carlos-garcia" invitado={invitado} regalo={regaloDe("juan-carlos-garcia")} />;
}
