# Invitaciones Baby Shower

La página reproduce el video de la invitación con animaciones (Motion + CSS),
sincronizadas con la canción del video.

```bash
npm run dev
```

- Un invitado = una carpeta: `app/(invitados)/<slug>/page.tsx` → URL `/<slug>`.
  Para uno nuevo copia cualquiera de esas carpetas (solo cambian `invitado` y `regalo`)
  y agrégalo a `lib/invitados.ts`.
- La raíz (`/`) es la lista privada de invitados con su enlace. Primero muestra una
  pantalla que pide la contraseña (definida en `lib/acceso.ts`); el servidor la
  valida y guarda una cookie de acceso por 30 días. Sin esa cookie la lista no se
  envía al navegador. El botón "Salir" de la lista borra la cookie.
- Escenas y tiempos: `components/invitacion/escenas.tsx` y `lib/invitacion.ts`.
- Para revisar una escena sin esperar: agrega `?t=<segundo>` a la URL (p. ej. `/tia-eva?t=22.5`).
- Imágenes recortadas del video en `public/img`, canción en `public/audio`.
