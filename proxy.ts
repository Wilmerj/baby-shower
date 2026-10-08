import { NextResponse, type NextRequest } from "next/server";

// La raíz tiene la lista de todos los invitados: solo entra quien sepa la
// contraseña (CLAVE_ADMIN). El usuario puede ser cualquiera. Si la variable no
// está definida, no entra nadie.
export function proxy(request: NextRequest) {
  const clave = process.env.CLAVE_ADMIN;
  const [tipo, credenciales] = request.headers.get("authorization")?.split(" ") ?? [];

  if (clave && tipo === "Basic" && credenciales) {
    const decodificadas = atob(credenciales);
    const recibida = decodificadas.slice(decodificadas.indexOf(":") + 1);
    if (recibida === clave) return NextResponse.next();
  }

  return new NextResponse("Contraseña requerida", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Invitados", charset="UTF-8"' },
  });
}

export const config = {
  matcher: "/",
};
