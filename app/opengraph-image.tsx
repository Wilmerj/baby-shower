import { ImageResponse } from "next/og";
import { evento, fechaCorta, hora } from "@/lib/evento";

// Imagen de la vista previa al compartir el enlace (WhatsApp, Telegram...).
// Aplica a todas las páginas de invitados.
export const alt = `Baby Shower de ${evento.bebe}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6efe4",
          color: "#4b4239",
        }}
      >
        <div
          style={{
            width: 1080,
            height: 510,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#fffcf7",
            border: "2px solid #c4a26a",
            borderRadius: 48,
          }}
        >
          <div style={{ fontSize: 30, letterSpacing: 12, color: "#8b7f71" }}>
            BABY SHOWER
          </div>
          <div style={{ marginTop: 24, fontSize: 96, color: "#7f9a7a" }}>
            {evento.bebe}
          </div>
          <div style={{ marginTop: 32, fontSize: 36, color: "#8b7f71" }}>
            {`${fechaCorta(evento.inicio)} · ${hora(evento.inicio)} · ${evento.lugar}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
