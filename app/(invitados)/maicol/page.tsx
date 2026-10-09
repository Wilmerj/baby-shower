import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Maicol";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="maicol" invitado={invitado} regalo={regaloDe("maicol")} />;
}
