import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";

const invitado = "Geiner, esposa y 2 hijos";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion invitado={invitado} />;
}
