import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";

const invitado = "Tía Yolanda y esposo";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion invitado={invitado} />;
}
