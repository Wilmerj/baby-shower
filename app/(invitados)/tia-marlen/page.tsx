import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tía Marlen y esposo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tia-marlen" invitado={invitado} regalo={regaloDe("tia-marlen")} />;
}
