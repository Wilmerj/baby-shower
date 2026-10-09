import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tío Gerardo y esposa";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tio-gerardo" invitado={invitado} regalo={regaloDe("tio-gerardo")} />;
}
