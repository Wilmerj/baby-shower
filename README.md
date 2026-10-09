# Invitaciones Baby Shower

La página reproduce el video de la invitación con animaciones (Motion + CSS),
sincronizadas con la canción del video.

```bash
npm run dev
```

- Invitados: todo se edita en `lib/invitados.ts` (nombre, enlace y regalo). Una sola
  ruta, `app/[enlace]/page.tsx`, atiende `/<enlace>` buscándolo en esa lista; los de la
  lista se generan al compilar. Un enlace que no está muestra la invitación sin nombre,
  sin regalo y sin botón de confirmar. Después de editar la lista hay que volver a
  publicar (`yarn deploy`).
- La raíz (`/`) es la lista privada de invitados con su enlace. Primero muestra una
  pantalla que pide la contraseña (definida en `lib/acceso.ts`); el servidor la
  valida y guarda una cookie de acceso por 30 días. Sin esa cookie la lista no se
  envía al navegador. El botón "Salir" de la lista borra la cookie.
- "Confirmar asistencia" (escena final) guarda la confirmación en el KV `CONFIRMACIONES`
  de Cloudflare (`lib/confirmaciones.ts`); la lista privada muestra quién confirmó y
  cuándo, con filtros Todos / Confirmados / Pendientes. El KV se crea solo en el primer
  `yarn deploy`; en local (`yarn preview` o `yarn dev`) se simula en `.wrangler/`.
- Escenas y tiempos: `components/invitacion/escenas.tsx` y `lib/invitacion.ts`.
- Para revisar una escena sin esperar: agrega `?t=<segundo>` a la URL (p. ej. `/tia-eva?t=22.5`).
- Imágenes recortadas del video en `public/img`, canción en `public/audio`.
