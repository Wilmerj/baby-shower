import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Don Camilo y esposa";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="don-camilo" invitado={invitado} regalo={regaloDe("don-camilo")} />;
}
