// Lista de invitados para la página privada de la raíz. Al agregar un
// invitado, crea su carpeta en app/(invitados)/<enlace>/ y agrégalo aquí.
// `regalo` se muestra en la escena final de su invitación; con "" no sale nada.
// Solo servidor: la lista completa nunca debe ir en el JavaScript del navegador.
import "server-only";

export const GRUPOS_INVITADOS: { grupo: string; invitados: { nombre: string; enlace: string; regalo: string }[] }[] = [
  {
    grupo: "Lista 1",
    invitados: [
      { nombre: "Gildardo Betancourt y Esposa", enlace: "tia-eva", regalo: "" },
      { nombre: "Julian Betancourt, esposa e hijas", enlace: "julian", regalo: "" },
      { nombre: "Yessica Betancourt", enlace: "yessica", regalo: "" },
      { nombre: "Gerardo Cabezas y esposa", enlace: "tio-gerardo", regalo: "" },
      { nombre: "Joe Cabezas e hijo", enlace: "joe-y-anthony", regalo: "" },
      { nombre: "Sebastian Cabezas", enlace: "sebastian", regalo: "" },
      { nombre: "Jorge Cabezas y esposa", enlace: "tio-jorge", regalo: "" },
      { nombre: "Yohana Cabezas y esposo", enlace: "yohana", regalo: "" },
      { nombre: "Leo Cabezas", enlace: "leo", regalo: "" },
      { nombre: "Alex Castillo, esposa e hija", enlace: "tia-nora", regalo: "" },
      { nombre: "Luis Cabezas y esposa", enlace: "luis", regalo: "" },
      { nombre: "Maicol Cabezas", enlace: "maicol", regalo: "" },
      { nombre: "Exon Cabezas", enlace: "exon", regalo: "" },
      { nombre: "Jaime Arevalo y esposa", enlace: "tia-yineth", regalo: "" },
      { nombre: "Tania arevalo y Acompañante", enlace: "tania-y-carlos", regalo: "" },
    ],
  },
  {
    grupo: "Lista 2",
    invitados: [
      { nombre: "Marlen Garzón y esposo", enlace: "tia-marlen", regalo: "" },
      { nombre: "Leo mejia y acompañante", enlace: "leo-y-novia", regalo: "" },
      { nombre: "Geiner mejia, esposa e hijos", enlace: "geiner", regalo: "" },
      { nombre: "Blanca Garzón", enlace: "tia-blanca", regalo: "" },
      { nombre: "Juan Carlos Garcia y esposa", enlace: "juan-carlos-garcia", regalo: "" },
      { nombre: "Edward Garcia, esposa e hija", enlace: "edward", regalo: "" },
      { nombre: "Jani Garcia, esposo e hijo", enlace: "jani", regalo: "" },
      { nombre: "Dana Garcia, esposo e hijo", enlace: "dana", regalo: "" },
      { nombre: "Eduardo Garcia y esposa", enlace: "eduardo-garcia", regalo: "" },
      { nombre: "Natilia Garcia y acompañante", enlace: "natilia", regalo: "" },
      { nombre: "Myriam Garzón", enlace: "tia-myriam", regalo: "" },
      { nombre: "Jeisson Ortiz y acompañante", enlace: "jeisson", regalo: "" },
      { nombre: "Jonathan Ortiz, esposa e hijos", enlace: "jonathan", regalo: "" },
      { nombre: "Yolanda Garzón y esposo", enlace: "tia-yolanda", regalo: "" },
      { nombre: "Sebastian Mejia y acompañante", enlace: "sebastian-y-novia", regalo: "" },
      { nombre: "Leidy Mejia y novia", enlace: "leidy", regalo: "" },
    ],
  },
  {
    grupo: "Lista 3",
    invitados: [
      { nombre: "Juanfe y Jules", enlace: "juanfe-y-jules", regalo: "" },
      { nombre: "Simio y Geral", enlace: "simio-y-geral", regalo: "" },
      { nombre: "Carl y Angela", enlace: "carl-y-angela", regalo: "" },
      { nombre: "Cantor", enlace: "cantor", regalo: "" },
      { nombre: "Juan DC", enlace: "juan-dc", regalo: "" },
      { nombre: "Mus", enlace: "mus", regalo: "" },
      { nombre: "Sampol y Keily", enlace: "sampol-y-keily", regalo: "" },
      { nombre: "Estefany", enlace: "estefany", regalo: "" },
      { nombre: "Jhenner y Nicol", enlace: "jhenner-y-nicol", regalo: "" },
      { nombre: "Malonso", enlace: "malonso", regalo: "" },
      { nombre: "Gotza", enlace: "gotza", regalo: "" },
      { nombre: "Yeik", enlace: "yeik", regalo: "" },
      { nombre: "Don Camilo y esposa", enlace: "don-camilo", regalo: "" },
      { nombre: "Edu Piña", enlace: "edu-pina", regalo: "" },
      { nombre: "Gollum, esposa e hijo", enlace: "gollum", regalo: "" },
    ],
  },
  {
    grupo: "Lista 4",
    invitados: [
      { nombre: "Emir Gaitan", enlace: "mama", regalo: "Tina de Baño" },
      { nombre: "Julio Quimbayo", enlace: "papa", regalo: "" },
      { nombre: "Carolina Gaitan e Hijo", enlace: "caro-y-michael", regalo: "" },
      { nombre: "Marisol Gaitan e Hija", enlace: "marisol-y-helen", regalo: "" },
      { nombre: "Tatiana Quimbayo, esposo e Hija", enlace: "tatiana", regalo: "" },
      { nombre: "Nelson Perez, Esposa e hijos", enlace: "adriana", regalo: "" },
      { nombre: "Miguel Ángel Perez y acompañante", enlace: "miguel-angel", regalo: "" },
      { nombre: "Joselin Vivas, Esposa e hijo", enlace: "jocelin", regalo: "" },
      { nombre: "Diego Gaitan", enlace: "diego-gaitan", regalo: "" },
      { nombre: "Valentina Gaitan, esposo e hija", enlace: "valentina", regalo: "" },
      { nombre: "Ingrid Gaitan y esposo", enlace: "nicolas-e-ingrid", regalo: "" },
      { nombre: "Adrian Arias, esposa e hija", enlace: "fernanda", regalo: "" },
      { nombre: "Naren Gaitan, esposa e hijos", enlace: "naren-julia", regalo: "" },
      { nombre: "Alex Prada, esposa e hijos", enlace: "geral", regalo: "" },
      { nombre: "Balbino Gaitan, acompañante e hija", enlace: "tio-balbino", regalo: "" },
      { nombre: "Marta Gaitan", enlace: "marta-gaitan", regalo: "" },
      { nombre: "Cristian Gaitan, acompañante e hijos", enlace: "cristian-gaitan", regalo: "" },
      { nombre: "Carol Gaitan", enlace: "carol-gaitan", regalo: "" },
      { nombre: "Oscar Gaitan, esposa e hijo", enlace: "oscar-gaitan", regalo: "" },
      { nombre: "Carmen Gaitan", enlace: "carmen-gaitan", regalo: "" },
      { nombre: "Moisa Gaitan, esposa e hijo", enlace: "moisa", regalo: "" },
      { nombre: "Yadira Gaitan e hijas", enlace: "yadira-gaitan", regalo: "" },
      { nombre: "Amanda Gaitan", enlace: "amanda-gaitan", regalo: "" },
      { nombre: "Jorge Gaitan e hija", enlace: "jorge-gaitan", regalo: "" },
      { nombre: "Valentina Betancourt", enlace: "valentina-betancourt", regalo: "" },
      { nombre: "Viviana Romero, esposo e hijo", enlace: "viviana-romero", regalo: "" },
      { nombre: "Michael Paredes", enlace: "michael-paredes", regalo: "" },
      { nombre: "Jhon Castaño", enlace: "jhon-castano", regalo: "" },
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
