import { Invitacion } from "@/components/invitacion/Invitacion";
import { metadataInvitado } from "@/lib/metadata";
import { regaloDe } from "@/lib/invitados";

const invitado = "Cristian Gaitan, acompañante e hijos";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return <Invitacion enlace="cristian-gaitan" invitado={invitado} regalo={regaloDe("cristian-gaitan")} />;
}
