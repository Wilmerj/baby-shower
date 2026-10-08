# Invitaciones Baby Shower

La página reproduce el video de la invitación con animaciones (Motion + CSS),
sincronizadas con la canción del video.

```bash
npm run dev
```

- Un invitado = una carpeta: `app/(invitados)/<slug>/page.tsx` → URL `/<slug>`.
  Para uno nuevo copia cualquiera de esas carpetas (solo cambian `invitado` y `regalo`)
  y agrégalo a `lib/invitados.ts`.
- La raíz (`/`) es la lista privada de invitados con su enlace; pide la contraseña
  de la variable `CLAVE_ADMIN` (en local está en `.env.local`; al publicar hay que
  configurarla también en el hosting, si no, nadie puede entrar).
- Escenas y tiempos: `components/invitacion/escenas.tsx` y `lib/invitacion.ts`.
- Para revisar una escena sin esperar: agrega `?t=<segundo>` a la URL (p. ej. `/tia-eva?t=22.5`).
- Imágenes recortadas del video en `public/img`, canción en `public/audio`.
