import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";

const invitado = "Jonathan, esposa y 3 hijos";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion invitado={invitado} />;
}
