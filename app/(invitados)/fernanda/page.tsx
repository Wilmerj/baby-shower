import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Fernanda, esposo e hija";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="fernanda" invitado={invitado} regalo={regaloDe("fernanda")} />;
}
