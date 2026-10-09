import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// Confirmaciones de asistencia guardadas en el KV CONFIRMACIONES de
// Cloudflare (ver wrangler.jsonc). La clave es el enlace del invitado y la
// fecha va también en la metadata, para que list() la traiga sin más lecturas.

async function kv() {
  return (await getCloudflareContext({ async: true })).env.CONFIRMACIONES;
}

export async function guardarConfirmacion(enlace: string) {
  const fecha = new Date().toISOString();
  await (await kv()).put(enlace, fecha, { metadata: { fecha } });
}

export async function estaConfirmado(enlace: string) {
  return (await (await kv()).get(enlace)) !== null;
}

/** Enlace → fecha (ISO) de cada invitado que confirmó. */
export async function todasLasConfirmaciones(): Promise<Record<string, string>> {
  const espacio = await kv();
  const confirmados: Record<string, string> = {};
  let cursor: string | undefined;
  do {
    const pagina = await espacio.list<{ fecha: string }>({ cursor });
    for (const clave of pagina.keys) confirmados[clave.name] = clave.metadata?.fecha ?? "";
    cursor = pagina.list_complete ? undefined : pagina.cursor;
  } while (cursor);
  return confirmados;
}
