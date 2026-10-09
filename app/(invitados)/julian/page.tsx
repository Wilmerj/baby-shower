import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Julian, esposa y 2 hijas";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="julian" invitado={invitado} regalo={regaloDe("julian")} />;
}
