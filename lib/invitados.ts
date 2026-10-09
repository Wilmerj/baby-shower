// Lista de invitados para la página privada de la raíz. Al agregar un
// invitado, crea su carpeta en app/(invitados)/<enlace>/ y agrégalo aquí.
// `regalo` se muestra en la escena final de su invitación; con "" no sale nada.
// Solo servidor: la lista completa nunca debe ir en el JavaScript del navegador.
import "server-only";

export const GRUPOS_INVITADOS: { grupo: string; invitados: { nombre: string; enlace: string; regalo: string }[] }[] = [
  {
    grupo: "Lista 1",
    invitados: [
      { nombre: "Gildardo Betancourt y Esposa", enlace: "tia-eva", regalo: "Aspirador nasal eléctrico + 1 paca de pañales superior a etapa 3" },
      { nombre: "Julian Betancourt, esposa e hijas", enlace: "julian", regalo: "Cuna colecho + 1 paca de pañales superior a etapa 3" },
      { nombre: "Yessica Betancourt", enlace: "yessica", regalo: "Cojín de lactancia + 1 paca de pañales superior a etapa 3" },
      { nombre: "Gerardo Cabezas y esposa", enlace: "tio-gerardo", regalo: "Armario organizador de ropa + 1 paca de pañales superior a etapa 3" },
      { nombre: "Joe Cabezas e hijo", enlace: "joe-y-anthony", regalo: "10 pantalones talla 0-3 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Sebastian Cabezas", enlace: "sebastian", regalo: "Conjunto 3 piezas talla 0-3 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jorge Cabezas y esposa", enlace: "tio-jorge", regalo: "Cajonero para ropa de bebé + 1 paca de pañales superior a etapa 3" },
      { nombre: "Yohana Cabezas y esposo", enlace: "yohana", regalo: "4 pijamas enteras talla 0-3 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Leo Cabezas", enlace: "leo", regalo: "Máquina de ruido blanco + 1 paca de pañales superior a etapa 3" },
      { nombre: "Alex Castillo, esposa e hija", enlace: "tia-nora", regalo: "Pañalera con cambiador incluido + 1 paca de pañales superior a etapa 3" },
      { nombre: "Luis Cabezas y esposa", enlace: "luis", regalo: "Corral de juego para gatear + 1 paca de pañales superior a etapa 3" },
      { nombre: "Maicol Cabezas", enlace: "maicol", regalo: "Set de 3 libros de tela + 1 paca de pañales superior a etapa 3" },
      { nombre: "Exon Cabezas", enlace: "exon", regalo: "Termómetro infrarrojo digital + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jaime Arevalo y esposa", enlace: "tia-yineth", regalo: "Peluche con luces y arrullos + 1 paca de pañales superior a etapa 3" },
      { nombre: "Tania arevalo y Acompañante", enlace: "tania-y-carlos", regalo: "10 bodies manga corta 0-3 meses + 1 paca de pañales superior a etapa 3" },
    ],
  },
  {
    grupo: "Lista 2",
    invitados: [
      { nombre: "Marlen Garzón y esposo", enlace: "tia-marlen", regalo: "Extractor de leche manual + 1 paca de pañales superior a etapa 3" },
      { nombre: "Leo mejia y acompañante", enlace: "leo-y-novia", regalo: "10 bodies talla 3-6 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Geiner mejia, esposa e hijos", enlace: "geiner", regalo: "Mueble cambiador de pañales + 1 paca de pañales superior a etapa 3" },
      { nombre: "Blanca Garzón", enlace: "tia-blanca", regalo: "Set de 3 toallas con capota + 1 paca de pañales superior a etapa 3" },
      { nombre: "Juan Carlos Garcia y esposa", enlace: "juan-carlos-garcia", regalo: "Kit de lactancia: lanolina y bolsas + 1 paca de pañales superior a etapa 3" },
      { nombre: "Edward Garcia, esposa e hija", enlace: "edward", regalo: "4 pijamas enteras talla 3-6 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jani Garcia, esposo e hijo", enlace: "jani", regalo: "Set de 2 sacos de dormir + 1 paca de pañales superior a etapa 3" },
      { nombre: "Dana Garcia, esposo e hijo", enlace: "dana", regalo: "10 pantalones talla 3-6 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Eduardo Garcia y esposa", enlace: "eduardo-garcia", regalo: "Mesa de actividades musical + 1 paca de pañales superior a etapa 3" },
      { nombre: "Natilia Garcia y acompañante", enlace: "natilia", regalo: "Pijama térmica talla 3-6 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Myriam Garzón", enlace: "tia-myriam", regalo: "Set de 2 mantas de muselina + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jeisson Ortiz y acompañante", enlace: "jeisson", regalo: "10 bodies talla 6-9 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jonathan Ortiz, esposa e hijos", enlace: "jonathan", regalo: "Procesador de alimentos para bebé + 1 paca de pañales superior a etapa 3" },
      { nombre: "Yolanda Garzón y esposo", enlace: "tia-yolanda", regalo: "Set de 2 cobijas térmicas + 1 paca de pañales superior a etapa 3" },
      { nombre: "Sebastian Mejia y acompañante", enlace: "sebastian-y-novia", regalo: "4 pijamas enteras talla 6-9 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Leidy Mejia y novia", enlace: "leidy", regalo: "Set de 2 mantas envolventes + 1 paca de pañales superior a etapa 3" },
    ],
  },
  {
    grupo: "Lista 3",
    invitados: [
      { nombre: "Juanfe y Jules", enlace: "juanfe-y-jules", regalo: "10 pantalones talla 6-9 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Simio y Geral", enlace: "simio-y-geral", regalo: "Caja de pañitos húmedos piel delicada + 1 paca de pañales superior a etapa 3" },
      { nombre: "Carl y Angela", enlace: "carl-y-angela", regalo: "10 bodies talla 9-12 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Cantor", enlace: "cantor", regalo: "Conjunto 3 piezas talla 3-6 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Juan DC", enlace: "juan-dc", regalo: "Móvil musical para cuna + 1 paca de pañales superior a etapa 3" },
      { nombre: "Mus", enlace: "mus", regalo: "Set de sonajeros y mordedores + 1 paca de pañales superior a etapa 3" },
      { nombre: "Sampol y Keily", enlace: "sampol-y-keily", regalo: "Set de teteros anticólicos 9 oz + 1 paca de pañales superior a etapa 3" },
      { nombre: "Estefany", enlace: "estefany", regalo: "Kit de baño y cremas + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jhenner y Nicol", enlace: "jhenner-y-nicol", regalo: "4 pijamas enteras talla 9-12 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Malonso", enlace: "malonso", regalo: "Conjunto 3 piezas talla 6-9 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Gotza", enlace: "gotza", regalo: "Tapete de juego plegable + 1 paca de pañales superior a etapa 3" },
      { nombre: "Yeik", enlace: "yeik", regalo: "Set de teteros anticólicos 4 oz + 1 paca de pañales superior a etapa 3" },
      { nombre: "Don Camilo y esposa", enlace: "don-camilo", regalo: "Silla mecedora con vibración + 1 paca de pañales superior a etapa 3" },
      { nombre: "Edu Piña", enlace: "edu-pina", regalo: "Cortina blackout infantil + 1 paca de pañales superior a etapa 3" },
      { nombre: "Gollum, esposa e hijo", enlace: "gollum", regalo: "Gimnasio de actividades musical + 1 paca de pañales superior a etapa 3" },
    ],
  },
  {
    grupo: "Lista 4",
    invitados: [
      { nombre: "Emir Gaitan", enlace: "mama", regalo: "Tina de Baño" },
      { nombre: "Julio Quimbayo", enlace: "papa", regalo: "Álbum y diario de recuerdos + 1 paca de pañales superior a etapa 3" },
      { nombre: "Carolina Gaitan e Hijo", enlace: "caro-y-michael", regalo: "10 pantalones talla 9-12 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Marisol Gaitan e Hija", enlace: "marisol-y-helen", regalo: "Pijama térmica talla 9-12 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Tatiana Quimbayo, esposo e Hija", enlace: "tatiana", regalo: "Monitor de bebé con cámara + 1 paca de pañales superior a etapa 3" },
      { nombre: "Nelson Perez, Esposa e hijos", enlace: "adriana", regalo: "Centro de actividades saltarín + 1 paca de pañales superior a etapa 3" },
      { nombre: "Miguel Ángel Perez y acompañante", enlace: "miguel-angel", regalo: "10 bodies talla 12-18 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Joselin Vivas, Esposa e hijo", enlace: "jocelin", regalo: "Cuna moisés con toldillo + 1 paca de pañales superior a etapa 3" },
      { nombre: "Diego Gaitan", enlace: "diego-gaitan", regalo: "Portabebé ergonómico + 1 paca de pañales superior a etapa 3" },
      { nombre: "Valentina Gaitan, esposo e hija", enlace: "valentina", regalo: "Humidificador de vapor frío + 1 paca de pañales superior a etapa 3" },
      { nombre: "Ingrid Gaitan y esposo", enlace: "nicolas-e-ingrid", regalo: "4 pijamas enteras talla 12-18 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Adrian Arias, esposa e hija", enlace: "fernanda", regalo: "Cuna corral de viaje + 1 paca de pañales superior a etapa 3" },
      { nombre: "Naren Gaitan, esposa e hijos", enlace: "naren-julia", regalo: "Silla de carro para recién nacido + 1 paca de pañales superior a etapa 3" },
      { nombre: "Alex Prada, esposa e hijos", enlace: "geral", regalo: "Coche de paseo plegable + 1 paca de pañales superior a etapa 3" },
      { nombre: "Balbino Gaitan, acompañante e hija", enlace: "tio-balbino", regalo: "Extractor de leche eléctrico + 1 paca de pañales superior a etapa 3" },
      { nombre: "Marta Gaitan", enlace: "marta-gaitan", regalo: "Juego de sábanas para cuna + 1 paca de pañales superior a etapa 3" },
      { nombre: "Cristian Gaitan, acompañante e hijos", enlace: "cristian-gaitan", regalo: "Mecedora eléctrica tipo columpio + 1 paca de pañales superior a etapa 3" },
      { nombre: "Carol Gaitan", enlace: "carol-gaitan", regalo: "10 bodies manga larga 0-3 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Oscar Gaitan, esposa e hijo", enlace: "oscar-gaitan", regalo: "Colchón para cuna con protector + 1 paca de pañales superior a etapa 3" },
      { nombre: "Carmen Gaitan", enlace: "carmen-gaitan", regalo: "Libro de estimulación para papás + 1 paca de pañales superior a etapa 3" },
      { nombre: "Moisa Gaitan, esposa e hijo", enlace: "moisa", regalo: "Esterilizador y secador de teteros + 1 paca de pañales superior a etapa 3" },
      { nombre: "Yadira Gaitan e hijas", enlace: "yadira-gaitan", regalo: "Caneca para pañales + 1 paca de pañales superior a etapa 3" },
      { nombre: "Amanda Gaitan", enlace: "amanda-gaitan", regalo: "Conjunto 3 piezas talla 9-12 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jorge Gaitan e hija", enlace: "jorge-gaitan", regalo: "10 pantalones talla 12-18 meses + 1 paca de pañales superior a etapa 3" },
      { nombre: "Valentina Betancourt", enlace: "valentina-betancourt", regalo: "Caja de pañitos húmedos acolchados + 1 paca de pañales superior a etapa 3" },
      { nombre: "Viviana Romero, esposo e hijo", enlace: "viviana-romero", regalo: "Silla de comer + 1 paca de pañales superior a etapa 3" },
      { nombre: "Michael Paredes", enlace: "michael-paredes", regalo: "Set de sábanas para cuna corral + 1 paca de pañales superior a etapa 3" },
      { nombre: "Jhon Castaño", enlace: "jhon-castano", regalo: "Conjunto 3 piezas talla 12-18 meses + 1 paca de pañales superior a etapa 3" },
    ],
  },
  {
    grupo: "Lista 5",
    invitados: [
      { nombre: "Nidia Cabezas", enlace: "nidia-cabezas", regalo: "Cubo de actividades de madera + 1 paca de pañales superior a etapa 3" },
      { nombre: "Wilmer Garzon y acompañante", enlace: "wilmer-garzon", regalo: "Calentador de teteros + 1 paca de pañales superior a etapa 3" },
      { nombre: "David Garzon", enlace: "david-garzon", regalo: "Silla de apoyo para sentarse + 1 paca de pañales superior a etapa 3" },
      { nombre: "Kevin Garzon y acompañante", enlace: "kevin-garzon", regalo: "Correpasillos caminador didáctico + 1 paca de pañales superior a etapa 3" },
      { nombre: "Nicole Garzon y Arnold Schwarzenegger", enlace: "nicole-garzon", regalo: "Set de instrumentos musicales infantiles + 1 paca de pañales superior a etapa 3" },
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
