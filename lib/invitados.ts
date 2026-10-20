// Lista de invitados para la página privada de la raíz. Al agregar un
// invitado, crea su carpeta en app/(invitados)/<enlace>/ y agrégalo aquí.
// `regalo` se muestra en la escena final de su invitación; con "" no sale nada.
// Solo servidor: la lista completa nunca debe ir en el JavaScript del navegador.
import "server-only";

export const GRUPOS_INVITADOS: { grupo: string; invitados: { nombre: string; enlace: string; regalo: string }[] }[] = [
  {
    grupo: "Lista 1",
    invitados: [
      { nombre: "Gildardo Betancourt y Esposa", enlace: "tia-eva", regalo: "Aspirador nasal eléctrico + Pañales etapa 3  o superior" },
      { nombre: "Julian Betancourt, esposa e hijas", enlace: "julian", regalo: "Calentador de teteros  + Pañitos humedos" },
      { nombre: "Yessica Betancourt", enlace: "yessica", regalo: "Cojín de lactancia + Pañitos humedos" },
      { nombre: "Gerardo Cabezas y esposa", enlace: "tio-gerardo", regalo: "Regalo + Pañales etapa 3  o superior" },
      { nombre: "Joe Cabezas e hijo", enlace: "joe-y-anthony", regalo: "Regalo + Pañitos humedos" },
      { nombre: "Sebastian Cabezas", enlace: "sebastian", regalo: "Regalo + Pañales etapa 3  o superior" },
      { nombre: "Jorge Cabezas y esposa", enlace: "tio-jorge", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Yohana Cabezas y esposo", enlace: "yohana", regalo: "Pijama + Pañitos humedos" },
      { nombre: "Leo Cabezas", enlace: "leo", regalo: "Regalo + Pañitos humedos" },
      { nombre: "Alex Castillo, Esposa e hija", enlace: "tia-nora", regalo: "Kit de baño + Pañitos" },
      { nombre: "Luis Castillo y esposa", enlace: "luis", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Maicol Cabezas", enlace: "maicol", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Exon Cabezas", enlace: "exon", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Jaime Arevalo y Esposa", enlace: "tia-yineth", regalo: "Gimnasio para bebes + Pañales etapa 3 o superior" },
      { nombre: "Tania arevalo y Acompañante", enlace: "tania-y-carlos", regalo: "Pijama + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 2",
    invitados: [
      { nombre: "Marlen Garzón y esposo", enlace: "tia-marlen", regalo: "Mamelucos + Pañales etapa 3 o superior" },
      { nombre: "Leo mejia y acompañante", enlace: "leo-y-novia", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Geiner mejia, esposa e hijos", enlace: "geiner", regalo: "Juguetes interactivos + Pañitos humedos" },
      { nombre: "Blanca Garzón", enlace: "tia-blanca", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Juan Garcia y Esposa", enlace: "juan-carlos-garcia", regalo: "Regalo + Pañales etapa 2 o superior" },
      { nombre: "Edward Garcia, Esposa e hija", enlace: "edward", regalo: "Regalo + Pañales etapa 2 o superior" },
      { nombre: "Jani Garcia, esposo e hijo", enlace: "jani", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Dana Garcia, esposo e hijo", enlace: "dana", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Eduardo Garcia y Esposa", enlace: "eduardo-garcia", regalo: "Cobija suave + Pañales etapa 3 o superior" },
      { nombre: "Natalia Garcia y Marido", enlace: "natilia", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Myriam Garzón", enlace: "tia-myriam", regalo: "Conjunto + Pañales etapa 2 o superior" },
      { nombre: "Jeisson Ortiz y acompañante", enlace: "jeisson", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Jonathan Ortiz, esposa e hijos", enlace: "jonathan", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Yolanda Garzón y esposo", enlace: "tia-yolanda", regalo: "Cobija térmica + Pañales etapa 3 o superior" },
      { nombre: "Sebastian Mejia y acompañante", enlace: "sebastian-y-novia", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Leidy Mejia y novia", enlace: "leidy", regalo: "Regalo + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 3",
    invitados: [
      { nombre: "Juanfe y Jules", enlace: "juanfe-y-jules", regalo: "Esterilizador de teteros + Pañales etapa 3 o superior" },
      { nombre: "Simio y Geral", enlace: "simio-y-geral", regalo: "Semanario + Pañales etapa 3 o superior" },
      { nombre: "Carl y Angela", enlace: "carl-y-angela", regalo: "Pijama + Pañales etapa 3 o superior" },
      { nombre: "Cantor", enlace: "cantor", regalo: "Conjunto + Pañales etapa 3 o superior" },
      { nombre: "Juan DC", enlace: "juan-dc", regalo: "Termo de agua caliente (Bebe) + Pañales etapa 3 o superior" },
      { nombre: "Mus", enlace: "mus", regalo: "Cambiador portatil (Pañalera) + Pañitos humedos" },
      { nombre: "Estefany", enlace: "estefany", regalo: "Set de biberones + Pañales etapa 3 o superior" },
      { nombre: "Jhenner y Nicole", enlace: "jhenner-y-nicol", regalo: "Libros interactivos + Pañales etapa 3 o superior" },
      { nombre: "Malonso", enlace: "malonso", regalo: "Tina de baño + Pañales etapa 3 o superior" },
      { nombre: "Gotza", enlace: "gotza", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Yeik", enlace: "yeik", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Don Camilo y Esposa", enlace: "don-camilo", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Edu Piña", enlace: "edu-pina", regalo: "Maquina de ruido blanco + Pañitos" },
      { nombre: "Gollum, Esposa e Hijo", enlace: "gollum", regalo: "Fular + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 4",
    invitados: [
      { nombre: "Emir Gaitan", enlace: "mama", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Julio Quimbayo", enlace: "papa", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Carolina Gaitan e Hijo", enlace: "caro-y-michael", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Marisol Gaitan e Hija", enlace: "marisol-y-helen", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Tatiana Quimbayo, Esposo e Hija", enlace: "tatiana", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Nelson Perez, Esposa e hijos", enlace: "adriana", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Miguel Ángel Perez y acompañante", enlace: "miguel-angel", regalo: "Pijama + Pañitos" },
      { nombre: "Joselin Vivas, Esposa e hijo", enlace: "jocelin", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Diego Gaitan", enlace: "diego-gaitan", regalo: "Pijama + Pañales etapa 3 o superior" },
      { nombre: "Valentina Gaitan, Esposo e hija", enlace: "valentina", regalo: "Regalo + Pañitos humedos" },
      { nombre: "Ingrid Gaitan y Esposo", enlace: "nicolas-e-ingrid", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Adrian Arias, Esposa e hija", enlace: "fernanda", regalo: "Pijamas + Pañitos humedos" },
      { nombre: "Naren Gaitan, Esposa e hijos", enlace: "naren-julia", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Alex Prada, Esposa e hijos", enlace: "geral", regalo: "Sonajero + Pañales etapa 3 o superior" },
      { nombre: "Balbino Gaitan, Acompañante e hija", enlace: "tio-balbino", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Marta Gaitan", enlace: "marta-gaitan", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Cristian Gaitan, acompañante e hijos", enlace: "cristian-gaitan", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Carol Gaitan", enlace: "carol-gaitan", regalo: "Mameluco + Pañitos" },
      { nombre: "Oscar Gaitan, esposa e hijo", enlace: "oscar-gaitan", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Carmen Gaitan", enlace: "carmen-gaitan", regalo: "Regalo + Pañitos" },
      { nombre: "Moisa Gaitan, esposa e hijo", enlace: "moisa", regalo: "Mameluco + Pañales etapa 3 o superior" },
      { nombre: "Yadira Gaitan e hijas", enlace: "yadira-gaitan", regalo: "Mameluco + Pañales etapa 3 o superior" },
      { nombre: "Amanda Gaitan", enlace: "amanda-gaitan", regalo: "Semanario" },
      { nombre: "Jorge Gaitan e hija", enlace: "jorge-gaitan", regalo: "Semanario + Pañales etapa 3 o superior" },
      { nombre: "Valentina Betancourt", enlace: "valentina-betancourt", regalo: "Regalo + Pañitos humedos" },
      { nombre: "Viviana Romero, esposo e hijo", enlace: "viviana-romero", regalo: "Semanario + Pañitos humedos" },
      { nombre: "Michael Paredes", enlace: "michael-paredes", regalo: "Regalo + Pañales etapa 3 o superior" },
      { nombre: "Jhon Castaño", enlace: "jhon-castano", regalo: "Regalo + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 5",
    invitados: [
      { nombre: "Nidia Cabezas", enlace: "nidia-cabezas", regalo: "Regalo especial + Pañales etapa 3 o superior" },
      { nombre: "Wilmer Garzon y Acompañante", enlace: "wilmer-garzon", regalo: "Comedor bebe + Pañales etapa 3 o superior" },
      { nombre: "David Garzon", enlace: "david-garzon", regalo: "Caminador + Pañales etapa 3 o superior" },
      { nombre: "Kevin Garzon y Acompañante", enlace: "kevin-garzon", regalo: "Set de platos y cubiertos de silicona + Pañales etapa 3 o superior" },
      { nombre: "Plijj Garzon y Arnold Schwarzenegger", enlace: "nicole-garzon", regalo: "Cobija + Pañales etapa 3 o superior" },
    ],
  },
];

// Regalo asignado a un invitado por su enlace ("" si no tiene o no existe).
export function regaloDe(enlace: string): string {
  for (const { invitados } of GRUPOS_INVITADOS) {
    const invitado = invitados.find((i) => i.enlace === enlace);
    if (invitado) return invitado.regalo;
  }
  return "";
}
