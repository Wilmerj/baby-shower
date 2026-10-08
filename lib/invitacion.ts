// Textos fijos de la invitación, copiados del video. Lo único que cambia por
// invitado es el nombre y el regalo (props de <Invitacion />).
export const BEBE = "Derek";
export const PAPAS = "Wilmer y Nicol";
// Se usa en la descripción de la vista previa al compartir el enlace.
export const FECHA = "el domingo 28 de noviembre";

// Momento (en segundos, igual que en el video) en que entra cada escena y en
// que empieza a salir. Entre el `fin` de una y el `inicio` de la siguiente
// queda solo el fondo, como en el video.
export const ESCENAS = [
  { inicio: 0, fin: 5.8 },
  { inicio: 6.3, fin: 11.9 },
  { inicio: 12.7, fin: 21.6 },
  { inicio: 22.6, fin: 37.1 },
  { inicio: 38.0, fin: Infinity },
] as const;

export const DURACION = 45;

export function escenaEn(t: number) {
  return ESCENAS.findIndex((e) => t >= e.inicio && t < e.fin);
}

// "Tía Eva y esposo", "Julian, esposa y 2 hijas"… son invitaciones para varios.
export function esPlural(invitado: string) {
  return /,|\s[ye]\s/i.test(invitado);
}
