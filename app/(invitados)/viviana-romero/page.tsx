import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Viviana Romero y esposo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="viviana-romero" invitado={invitado} regalo={regaloDe("viviana-romero")} />;
}
