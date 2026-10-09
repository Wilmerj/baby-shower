import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Jocelin, tía Luisa e hijo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="jocelin" invitado={invitado} regalo={regaloDe("jocelin")} />;
}
