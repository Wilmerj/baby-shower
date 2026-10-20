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
      { nombre: "Jaime Arevalo y esposa", enlace: "tia-yineth", regalo: "Pañalera con cambiador (todo en uno) + Pañales etapa 3 o superior" },
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
      { nombre: "Juanfe y Jules", enlace: "juanfe-y-jules", regalo: "10 pantalones talla 6-9 meses + Pañales etapa 3 o superior" },
      { nombre: "Simio y Geral", enlace: "simio-y-geral", regalo: "Caja de pañitos húmedos piel delicada + Pañales etapa 3 o superior" },
      { nombre: "Carl y Angela", enlace: "carl-y-angela", regalo: "10 bodies talla 9-12 meses + Pañales etapa 3 o superior" },
      { nombre: "Cantor", enlace: "cantor", regalo: "Conjunto 3 piezas talla 3-6 meses + Pañales etapa 3 o superior" },
      { nombre: "Juan DC", enlace: "juan-dc", regalo: "Móvil musical para cuna + Pañales etapa 3 o superior" },
      { nombre: "Mus", enlace: "mus", regalo: "Set de sonajeros y mordedores + Pañales etapa 3 o superior" },
      { nombre: "Estefany", enlace: "estefany", regalo: "Kit de baño y cremas + Pañales etapa 3 o superior" },
      { nombre: "Jhenner y Nicol", enlace: "jhenner-y-nicol", regalo: "4 pijamas enteras talla 9-12 meses + Pañales etapa 3 o superior" },
      { nombre: "Malonso", enlace: "malonso", regalo: "Conjunto 3 piezas talla 6-9 meses + Pañales etapa 3 o superior" },
      { nombre: "Gotza", enlace: "gotza", regalo: "Tapete de juego plegable + Pañales etapa 3 o superior" },
      { nombre: "Yeik", enlace: "yeik", regalo: "Set de teteros anticólicos 4 oz + Pañales etapa 3 o superior" },
      { nombre: "Don Camilo y esposa", enlace: "don-camilo", regalo: "Silla mecedora con vibración + Pañales etapa 3 o superior" },
      { nombre: "Edu Piña", enlace: "edu-pina", regalo: "Cortina blackout infantil + Pañales etapa 3 o superior" },
      { nombre: "Gollum, esposa e hijo", enlace: "gollum", regalo: "Gimnasio de actividades musical + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 4",
    invitados: [
      { nombre: "Emir Gaitan", enlace: "mama", regalo: "Tina de Baño" },
      { nombre: "Julio Quimbayo", enlace: "papa", regalo: "Álbum y diario de recuerdos + Pañales etapa 3 o superior" },
      { nombre: "Carolina Gaitan e Hijo", enlace: "caro-y-michael", regalo: "10 pantalones talla 9-12 meses + Pañales etapa 3 o superior" },
      { nombre: "Marisol Gaitan e Hija", enlace: "marisol-y-helen", regalo: "Pijama térmica talla 9-12 meses + Pañales etapa 3 o superior" },
      { nombre: "Tatiana Quimbayo, esposo e Hija", enlace: "tatiana", regalo: "Monitor de bebé con cámara + Pañales etapa 3 o superior" },
      { nombre: "Nelson Perez, Esposa e hijos", enlace: "adriana", regalo: "Centro de actividades saltarín + Pañales etapa 3 o superior" },
      { nombre: "Miguel Ángel Perez y acompañante", enlace: "miguel-angel", regalo: "10 bodies talla 12-18 meses + Pañales etapa 3 o superior" },
      { nombre: "Joselin Vivas, Esposa e hijo", enlace: "jocelin", regalo: "Cuna moisés con toldillo + Pañales etapa 3 o superior" },
      { nombre: "Diego Gaitan", enlace: "diego-gaitan", regalo: "Portabebé ergonómico + Pañales etapa 3 o superior" },
      { nombre: "Valentina Gaitan, esposo e hija", enlace: "valentina", regalo: "Humidificador de vapor frío + Pañales etapa 3 o superior" },
      { nombre: "Ingrid Gaitan y esposo", enlace: "nicolas-e-ingrid", regalo: "4 pijamas enteras talla 12-18 meses + Pañales etapa 3 o superior" },
      { nombre: "Adrian Arias, esposa e hija", enlace: "fernanda", regalo: "Cuna corral de viaje + Pañales etapa 3 o superior" },
      { nombre: "Naren Gaitan, esposa e hijos", enlace: "naren-julia", regalo: "Silla de carro para recién nacido + Pañales etapa 3 o superior" },
      { nombre: "Alex Prada, esposa e hijos", enlace: "geral", regalo: "Coche de paseo plegable + Pañales etapa 3 o superior" },
      { nombre: "Balbino Gaitan, acompañante e hija", enlace: "tio-balbino", regalo: "Extractor de leche eléctrico + Pañales etapa 3 o superior" },
      { nombre: "Marta Gaitan", enlace: "marta-gaitan", regalo: "Juego de sábanas para cuna + Pañales etapa 3 o superior" },
      { nombre: "Cristian Gaitan, acompañante e hijos", enlace: "cristian-gaitan", regalo: "Mecedora eléctrica tipo columpio + Pañales etapa 3 o superior" },
      { nombre: "Carol Gaitan", enlace: "carol-gaitan", regalo: "10 bodies manga larga 0-3 meses + Pañales etapa 3 o superior" },
      { nombre: "Oscar Gaitan, esposa e hijo", enlace: "oscar-gaitan", regalo: "Colchón para cuna con protector + Pañales etapa 3 o superior" },
      { nombre: "Carmen Gaitan", enlace: "carmen-gaitan", regalo: "Libro de estimulación para papás + Pañales etapa 3 o superior" },
      { nombre: "Moisa Gaitan, esposa e hijo", enlace: "moisa", regalo: "Esterilizador y secador de teteros + Pañales etapa 3 o superior" },
      { nombre: "Yadira Gaitan e hijas", enlace: "yadira-gaitan", regalo: "Caneca para pañales + Pañales etapa 3 o superior" },
      { nombre: "Amanda Gaitan", enlace: "amanda-gaitan", regalo: "Conjunto 3 piezas talla 9-12 meses + Pañales etapa 3 o superior" },
      { nombre: "Jorge Gaitan e hija", enlace: "jorge-gaitan", regalo: "10 pantalones talla 12-18 meses + Pañales etapa 3 o superior" },
      { nombre: "Valentina Betancourt", enlace: "valentina-betancourt", regalo: "Caja de pañitos húmedos acolchados + Pañales etapa 3 o superior" },
      { nombre: "Viviana Romero, esposo e hijo", enlace: "viviana-romero", regalo: "Silla de comer + Pañales etapa 3 o superior" },
      { nombre: "Michael Paredes", enlace: "michael-paredes", regalo: "Set de sábanas para cuna corral + Pañales etapa 3 o superior" },
      { nombre: "Jhon Castaño", enlace: "jhon-castano", regalo: "Conjunto 3 piezas talla 12-18 meses + Pañales etapa 3 o superior" },
    ],
  },
  {
    grupo: "Lista 5",
    invitados: [
      { nombre: "Nidia Cabezas", enlace: "nidia-cabezas", regalo: "Cubo de actividades de madera + Pañales etapa 3 o superior" },
      { nombre: "Wilmer Garzon y acompañante", enlace: "wilmer-garzon", regalo: "Cuna colecho + Pañales etapa 3 o superior" },
      { nombre: "David Garzon", enlace: "david-garzon", regalo: "Silla de apoyo para sentarse + Pañales etapa 3 o superior" },
      { nombre: "Kevin Garzon y acompañante", enlace: "kevin-garzon", regalo: "Correpasillos caminador didáctico + Pañales etapa 3 o superior" },
      { nombre: "Nicole Garzon y Arnold Schwarzenegger", enlace: "nicole-garzon", regalo: "Set de instrumentos musicales infantiles + Pañales etapa 3 o superior" },
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
