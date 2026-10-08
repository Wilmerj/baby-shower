import { Invitacion } from "@/components/Invitacion";
import { metadataInvitado } from "@/lib/metadata";

const invitado = "Tía Marta";

export const metadata = metadataInvitado(invitado);

export default function Page() {
  return (
    <Invitacion
      invitado={invitado}
      saludo="Para nuestra querida"
      mensaje={
        <>
          <p>
            Siempre has estado en los momentos más importantes de nuestra
            familia, y este no podía ser la excepción.
          </p>
          <p>Nos encantaría que nos acompañes a darle la bienvenida a nuestro bebé.</p>
        </>
      }
    />
  );
}
