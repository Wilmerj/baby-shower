import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tío Balbino, acompañante y Sara";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tio-balbino" invitado={invitado} regalo={regaloDe("tio-balbino")} />;
}
