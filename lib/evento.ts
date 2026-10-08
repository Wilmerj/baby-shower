// Datos compartidos por todas las invitaciones. Lo que va entre [corchetes]
// es un marcador: reemplázalo con los datos reales del evento.
export const evento = {
  bebe: "[Nombre del bebé]",
  anfitriones: "[Nombres de los papás]",
  // Fecha y hora con el offset de la zona horaria del evento.
  inicio: "2026-11-15T15:00:00-05:00",
  fin: "2026-11-15T19:00:00-05:00",
  zonaHoraria: "America/Bogota",
  lugar: "[Nombre del lugar]",
  direccion: "[Dirección del lugar]",
  // Enlace de Google Maps al lugar. Si queda vacío se busca por la dirección.
  mapaUrl: "",
  // Número de WhatsApp para confirmar, con indicativo y sin "+" ni espacios.
  whatsapp: "570000000000",
  confirmarAntesDe: "2026-11-08T00:00:00-05:00",
};

const formato = (opciones: Intl.DateTimeFormatOptions) => (iso: string) =>
  new Intl.DateTimeFormat("es-CO", {
    timeZone: evento.zonaHoraria,
    ...opciones,
  }).format(new Date(iso));

export const diaSemana = formato({ weekday: "long" });
export const dia = formato({ day: "numeric" });
export const mes = formato({ month: "long" });
export const anio = formato({ year: "numeric" });
export const hora = formato({ hour: "numeric", minute: "2-digit" });
export const fechaCorta = formato({ day: "numeric", month: "long" });

// Google Calendar espera las fechas en UTC con el formato 20261115T200000Z.
const fechaCalendario = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const calendarioUrl = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Baby Shower de ${evento.bebe}`,
    location: `${evento.lugar}, ${evento.direccion}`,
  });
  const fechas = `${fechaCalendario(evento.inicio)}/${fechaCalendario(evento.fin)}`;
  return `https://calendar.google.com/calendar/render?${params}&dates=${fechas}`;
};

export const mapaUrl = () =>
  evento.mapaUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${evento.lugar}, ${evento.direccion}`,
  )}`;

export const confirmarUrl = (invitado?: string) => {
  const texto = invitado
    ? `¡Hola! Soy ${invitado} y confirmo mi asistencia al Baby Shower de ${evento.bebe}.`
    : `¡Hola! Confirmo mi asistencia al Baby Shower de ${evento.bebe}.`;
  return `https://wa.me/${evento.whatsapp}?text=${encodeURIComponent(texto)}`;
};
