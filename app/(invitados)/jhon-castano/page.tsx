import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";

const invitado = "Jhon Castaño";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion invitado={invitado} />;
}
