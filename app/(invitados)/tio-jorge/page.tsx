import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Tío Jorge y esposa";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="tio-jorge" invitado={invitado} regalo={regaloDe("tio-jorge")} />;
}
