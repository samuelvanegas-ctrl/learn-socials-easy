export type Pregunta = {
  q: string;
  opciones: string[];
  correcta: number;
};

export type Tema = {
  id: string;
  titulo: string;
  resumen: string;
  dificultad: "Fácil" | "Medio" | "Avanzado";
  minutos: number;
  video: { titulo: string; busqueda: string };
  lectura: string[];
  claves: string[];
  quiz: Pregunta[];
};

export type Grado = {
  slug: string;
  nombre: string;
  etapa: "Primaria" | "Bachillerato" | "Media";
  descripcion: string;
  temas: Tema[];
};

export const grados: Grado[] = [
  {
    slug: "1",
    nombre: "Primero",
    etapa: "Primaria",
    descripcion: "Yo, mi familia y el lugar donde vivo.",
    temas: [
      {
        id: "1-yo-y-mi-familia",
        titulo: "Yo y mi familia",
        resumen: "Quiénes somos, cómo es una familia y qué papel cumple cada persona.",
        dificultad: "Fácil",
        minutos: 8,
        video: { titulo: "La familia y sus miembros", busqueda: "la familia para niños ciencias sociales primero" },
        lectura: [
          "Cada persona tiene un nombre, una edad y una historia. Eso se llama identidad.",
          "La familia es el primer grupo social al que pertenecemos. Puede estar formada por papá, mamá, hermanos, abuelos, tíos o cuidadores.",
          "En la familia todos ayudan: unos trabajan, otros estudian y todos colaboran en las tareas de la casa.",
        ],
        claves: ["Identidad", "Familia", "Roles", "Convivencia"],
        quiz: [
          { q: "¿Cuál es el primer grupo social al que pertenecemos?", opciones: ["La escuela", "La familia", "El barrio"], correcta: 1 },
          { q: "La identidad incluye…", opciones: ["Nuestro nombre e historia", "Solo la ropa", "El color favorito"], correcta: 0 },
          { q: "En la familia las tareas…", opciones: ["Las hace una sola persona", "Se comparten", "No existen"], correcta: 1 },
        ],
      },
      {
        id: "1-mi-colegio",
        titulo: "Mi colegio y mis normas",
        resumen: "Las normas sirven para vivir mejor con los demás.",
        dificultad: "Fácil",
        minutos: 7,
        video: { titulo: "Normas de convivencia en el colegio", busqueda: "normas de convivencia para niños" },
        lectura: [
          "El colegio es un lugar donde aprendemos y compartimos con otras personas.",
          "Las normas son acuerdos que nos ayudan a estar seguros y respetarnos: levantar la mano, cuidar los materiales, escuchar al otro.",
          "Cuando alguien no cumple una norma, se conversa y se busca reparar el daño.",
        ],
        claves: ["Normas", "Respeto", "Acuerdos"],
        quiz: [
          { q: "Las normas sirven para…", opciones: ["Castigar", "Convivir mejor", "Perder tiempo"], correcta: 1 },
          { q: "Un ejemplo de norma escolar es…", opciones: ["Escuchar al compañero", "Gritar en clase", "Romper libros"], correcta: 0 },
          { q: "Si alguien incumple una norma se debe…", opciones: ["Ignorarlo", "Dialogar y reparar", "Pelear"], correcta: 1 },
        ],
      },
      {
        id: "1-mi-barrio",
        titulo: "El lugar donde vivo",
        resumen: "Casa, barrio, vereda y ciudad: nuestros primeros espacios.",
        dificultad: "Fácil",
        minutos: 9,
        video: { titulo: "Mi barrio y sus lugares", busqueda: "el barrio y sus lugares ciencias sociales primaria" },
        lectura: [
          "Vivimos en una casa, que está en un barrio o en una vereda.",
          "En el barrio hay lugares importantes: la tienda, el parque, el puesto de salud, la iglesia y el colegio.",
          "Cuidar el barrio es cuidar el lugar de todos: no botar basura y respetar los espacios públicos.",
        ],
        claves: ["Barrio", "Vereda", "Espacio público"],
        quiz: [
          { q: "Un lugar público del barrio es…", opciones: ["Tu habitación", "El parque", "Tu closet"], correcta: 1 },
          { q: "Las veredas se encuentran normalmente en…", opciones: ["El campo", "El centro comercial", "El aeropuerto"], correcta: 0 },
          { q: "Cuidar el barrio significa…", opciones: ["Botar basura", "Rayar paredes", "Respetar los espacios de todos"], correcta: 2 },
        ],
      },
    ],
  },
  {
    slug: "2",
    nombre: "Segundo",
    etapa: "Primaria",
    descripcion: "La comunidad, el tiempo y los paisajes.",
    temas: [
      {
        id: "2-comunidad",
        titulo: "La comunidad y sus oficios",
        resumen: "Todos aportamos algo al lugar donde vivimos.",
        dificultad: "Fácil",
        minutos: 8,
        video: { titulo: "Los oficios y profesiones", busqueda: "oficios y profesiones de la comunidad para niños" },
        lectura: [
          "Una comunidad son las personas que comparten un territorio y necesidades.",
          "Cada oficio aporta: el panadero, la médica, el conductor, la maestra, el agricultor.",
          "El trabajo de unos depende del de otros: eso se llama interdependencia.",
        ],
        claves: ["Comunidad", "Oficios", "Interdependencia"],
        quiz: [
          { q: "Una comunidad comparte…", opciones: ["Territorio y necesidades", "Solo apellidos", "Solo juguetes"], correcta: 0 },
          { q: "Interdependencia significa…", opciones: ["Nadie se necesita", "Dependemos unos de otros", "Todos hacen lo mismo"], correcta: 1 },
          { q: "¿Quién produce alimentos en el campo?", opciones: ["El agricultor", "El piloto", "El bombero"], correcta: 0 },
        ],
      },
      {
        id: "2-tiempo",
        titulo: "El tiempo: antes, ahora y después",
        resumen: "Aprender a ordenar hechos en una línea de tiempo.",
        dificultad: "Fácil",
        minutos: 10,
        video: { titulo: "Línea de tiempo para niños", busqueda: "linea de tiempo para niños ciencias sociales" },
        lectura: [
          "El tiempo se mide en días, semanas, meses, años, décadas y siglos.",
          "Una línea de tiempo ordena los hechos desde el más antiguo hasta el más reciente.",
          "Comparar el pasado con el presente nos ayuda a entender los cambios: transporte, vestido, comunicación.",
        ],
        claves: ["Década", "Siglo", "Línea de tiempo"],
        quiz: [
          { q: "Una década son…", opciones: ["10 años", "100 años", "5 años"], correcta: 0 },
          { q: "Un siglo son…", opciones: ["50 años", "100 años", "1000 años"], correcta: 1 },
          { q: "La línea de tiempo ordena hechos…", opciones: ["Al azar", "Del más antiguo al más reciente", "Por colores"], correcta: 1 },
        ],
      },
      {
        id: "2-paisajes",
        titulo: "Paisaje natural y paisaje cultural",
        resumen: "Lo que hizo la naturaleza y lo que construyó el ser humano.",
        dificultad: "Fácil",
        minutos: 9,
        video: { titulo: "Paisaje natural vs cultural", busqueda: "paisaje natural y cultural para niños" },
        lectura: [
          "El paisaje natural está formado por montañas, ríos, mares, bosques y animales.",
          "El paisaje cultural es lo que las personas construyen: casas, carreteras, puentes, cultivos.",
          "Casi todos los paisajes mezclan lo natural y lo cultural.",
        ],
        claves: ["Paisaje natural", "Paisaje cultural"],
        quiz: [
          { q: "Un río pertenece al paisaje…", opciones: ["Natural", "Cultural", "Ninguno"], correcta: 0 },
          { q: "Una carretera es paisaje…", opciones: ["Natural", "Cultural", "Imaginario"], correcta: 1 },
          { q: "La mayoría de paisajes son…", opciones: ["Solo naturales", "Solo culturales", "Una mezcla"], correcta: 2 },
        ],
      },
    ],
  },
  {
    slug: "3",
    nombre: "Tercero",
    etapa: "Primaria",
    descripcion: "El municipio, los mapas y los derechos de los niños.",
    temas: [
      {
        id: "3-municipio",
        titulo: "El municipio y sus autoridades",
        resumen: "Cómo se organiza el lugar donde vivimos.",
        dificultad: "Fácil",
        minutos: 10,
        video: { titulo: "El municipio y el alcalde", busqueda: "el municipio y sus autoridades para niños colombia" },
        lectura: [
          "El municipio es la división política más pequeña del país y está formado por zona urbana y zona rural.",
          "El alcalde o alcaldesa gobierna el municipio y es elegido por voto popular.",
          "El Concejo Municipal aprueba las normas locales y vigila al alcalde.",
        ],
        claves: ["Municipio", "Alcalde", "Concejo"],
        quiz: [
          { q: "¿Quién gobierna el municipio?", opciones: ["El presidente", "El alcalde", "El gobernador"], correcta: 1 },
          { q: "El municipio tiene zona…", opciones: ["Solo urbana", "Urbana y rural", "Solo rural"], correcta: 1 },
          { q: "El Concejo Municipal…", opciones: ["Aprueba normas locales", "Dirige el ejército", "Elige al presidente"], correcta: 0 },
        ],
      },
      {
        id: "3-mapas",
        titulo: "Puntos cardinales y mapas",
        resumen: "Orientarse y leer un mapa sencillo.",
        dificultad: "Medio",
        minutos: 11,
        video: { titulo: "Puntos cardinales y la rosa de los vientos", busqueda: "puntos cardinales para niños" },
        lectura: [
          "Los puntos cardinales son Norte, Sur, Este y Oeste. El Sol sale por el Este y se oculta por el Oeste.",
          "Un mapa es una representación plana de un territorio, más pequeña que la realidad: eso es la escala.",
          "Las convenciones son los símbolos del mapa: ríos en azul, carreteras en líneas, ciudades en puntos.",
        ],
        claves: ["Puntos cardinales", "Escala", "Convenciones"],
        quiz: [
          { q: "El Sol sale por el…", opciones: ["Oeste", "Este", "Sur"], correcta: 1 },
          { q: "La escala indica…", opciones: ["El color del mapa", "La relación entre mapa y realidad", "La fecha"], correcta: 1 },
          { q: "Los ríos en un mapa suelen ir en color…", opciones: ["Azul", "Rojo", "Negro"], correcta: 0 },
        ],
      },
      {
        id: "3-derechos",
        titulo: "Derechos y deberes de los niños",
        resumen: "Todo derecho viene acompañado de un deber.",
        dificultad: "Fácil",
        minutos: 8,
        video: { titulo: "Los derechos de los niños", busqueda: "derechos de los niños explicados para niños" },
        lectura: [
          "Los niños tienen derecho a la vida, la salud, la educación, el juego, un nombre y una familia.",
          "Los deberes son responsabilidades: estudiar, respetar a los demás, cuidar el entorno.",
          "En Colombia estos derechos están protegidos por la Constitución y el Código de Infancia y Adolescencia.",
        ],
        claves: ["Derechos", "Deberes", "Constitución"],
        quiz: [
          { q: "La educación es un…", opciones: ["Derecho", "Castigo", "Favor"], correcta: 0 },
          { q: "Un deber de los estudiantes es…", opciones: ["Respetar a los demás", "Gritar", "Faltar"], correcta: 0 },
          { q: "Los derechos de los niños están en…", opciones: ["Un cuento", "La Constitución", "Ningún lado"], correcta: 1 },
        ],
      },
    ],
  },
  {
    slug: "4",
    nombre: "Cuarto",
    etapa: "Primaria",
    descripcion: "Colombia: regiones, relieve y pueblos originarios.",
    temas: [
      {
        id: "4-regiones",
        titulo: "Las regiones naturales de Colombia",
        resumen: "Andina, Caribe, Pacífica, Orinoquía, Amazonía e Insular.",
        dificultad: "Medio",
        minutos: 12,
        video: { titulo: "Las 6 regiones de Colombia", busqueda: "regiones naturales de colombia explicadas" },
        lectura: [
          "Colombia tiene seis regiones naturales: Andina, Caribe, Pacífica, Orinoquía, Amazonía e Insular.",
          "La Andina concentra la mayor población y las principales ciudades. La Caribe tiene costa sobre el mar Caribe.",
          "La Pacífica es muy lluviosa y biodiversa; la Orinoquía tiene llanuras y ganadería; la Amazonía es selva; la Insular la forman San Andrés, Providencia y Santa Catalina.",
        ],
        claves: ["Región Andina", "Orinoquía", "Amazonía", "Insular"],
        quiz: [
          { q: "¿Cuántas regiones naturales tiene Colombia?", opciones: ["4", "6", "8"], correcta: 1 },
          { q: "La región Insular está formada por…", opciones: ["San Andrés y Providencia", "Boyacá", "Chocó"], correcta: 0 },
          { q: "La región más poblada es…", opciones: ["Amazonía", "Andina", "Orinoquía"], correcta: 1 },
        ],
      },
      {
        id: "4-relieve",
        titulo: "Relieve e hidrografía",
        resumen: "Cordilleras, valles, llanuras y los grandes ríos.",
        dificultad: "Medio",
        minutos: 11,
        video: { titulo: "Relieve colombiano", busqueda: "relieve e hidrografia de colombia" },
        lectura: [
          "Los Andes se dividen en Colombia en tres cordilleras: Occidental, Central y Oriental.",
          "Entre ellas están los valles del Cauca y del Magdalena.",
          "Ríos principales: Magdalena, Cauca, Atrato, Meta, Amazonas y Orinoco.",
        ],
        claves: ["Cordilleras", "Valles", "Ríos"],
        quiz: [
          { q: "¿Cuántas cordilleras hay en Colombia?", opciones: ["Dos", "Tres", "Cinco"], correcta: 1 },
          { q: "El río más importante del interior es el…", opciones: ["Magdalena", "Nilo", "Paraná"], correcta: 0 },
          { q: "El valle del Cauca está entre las cordilleras…", opciones: ["Occidental y Central", "Central y Oriental", "Oriental y Occidental"], correcta: 0 },
        ],
      },
      {
        id: "4-indigenas",
        titulo: "Pueblos originarios de Colombia",
        resumen: "Muiscas, taironas, quimbayas y los pueblos actuales.",
        dificultad: "Medio",
        minutos: 12,
        video: { titulo: "Pueblos precolombinos de Colombia", busqueda: "muiscas taironas quimbayas resumen" },
        lectura: [
          "Antes de la llegada de los españoles vivían aquí pueblos como los muiscas (altiplano), los taironas (Sierra Nevada) y los quimbayas (eje cafetero).",
          "Los muiscas eran agricultores, comerciaban sal y esmeraldas y estaban organizados en cacicazgos.",
          "Hoy existen más de 100 pueblos indígenas con lenguas y territorios propios reconocidos por la Constitución de 1991.",
        ],
        claves: ["Muiscas", "Taironas", "Cacicazgo", "Resguardo"],
        quiz: [
          { q: "Los muiscas habitaron…", opciones: ["El altiplano cundiboyacense", "La Amazonía", "San Andrés"], correcta: 0 },
          { q: "Los taironas vivieron en…", opciones: ["La Sierra Nevada de Santa Marta", "Los Llanos", "El Chocó"], correcta: 0 },
          { q: "Los pueblos indígenas actuales están reconocidos por…", opciones: ["Nadie", "La Constitución de 1991", "Un decreto de 1810"], correcta: 1 },
        ],
      },
    ],
  },
  {
    slug: "5",
    nombre: "Quinto",
    etapa: "Primaria",
    descripcion: "Descubrimiento, Colonia e Independencia.",
    temas: [
      {
        id: "5-conquista",
        titulo: "Conquista y colonización de América",
        resumen: "1492 y el choque de dos mundos.",
        dificultad: "Medio",
        minutos: 13,
        video: { titulo: "La conquista de América", busqueda: "conquista de america resumen para estudiantes" },
        lectura: [
          "En 1492 Cristóbal Colón llegó a América buscando una ruta hacia Asia.",
          "La conquista trajo enfermedades, guerras y la caída de grandes pueblos originarios.",
          "Se impuso el idioma español, la religión católica y un nuevo orden social.",
        ],
        claves: ["1492", "Colón", "Mestizaje"],
        quiz: [
          { q: "Colón llegó a América en…", opciones: ["1492", "1810", "1519"], correcta: 0 },
          { q: "La conquista impuso…", opciones: ["El idioma español", "El idioma inglés", "El quechua"], correcta: 0 },
          { q: "Una consecuencia grave para los indígenas fue…", opciones: ["Las enfermedades traídas de Europa", "Más territorio", "Más poder"], correcta: 0 },
        ],
      },
      {
        id: "5-colonia",
        titulo: "La Colonia y la sociedad colonial",
        resumen: "Virreinato, encomienda, castas y economía.",
        dificultad: "Medio",
        minutos: 13,
        video: { titulo: "La sociedad colonial", busqueda: "sociedad colonial nueva granada castas" },
        lectura: [
          "El territorio se organizó en el Virreinato de la Nueva Granada, con capital en Santafé de Bogotá.",
          "La sociedad se dividió en castas: españoles peninsulares, criollos, mestizos, indígenas y esclavizados africanos.",
          "La economía se basaba en la minería, la agricultura y el trabajo forzado mediante encomienda y mita.",
        ],
        claves: ["Virreinato", "Criollos", "Encomienda"],
        quiz: [
          { q: "La capital del Virreinato de la Nueva Granada era…", opciones: ["Cartagena", "Santafé de Bogotá", "Popayán"], correcta: 1 },
          { q: "Los criollos eran…", opciones: ["Hijos de españoles nacidos en América", "Españoles nacidos en Europa", "Indígenas"], correcta: 0 },
          { q: "La encomienda era…", opciones: ["Un impuesto a los barcos", "Un sistema de trabajo forzado indígena", "Una fiesta"], correcta: 1 },
        ],
      },
      {
        id: "5-independencia",
        titulo: "La Independencia de Colombia",
        resumen: "Del 20 de julio de 1810 a Boyacá 1819.",
        dificultad: "Medio",
        minutos: 12,
        video: { titulo: "20 de julio y Batalla de Boyacá", busqueda: "independencia de colombia 1810 1819 resumen" },
        lectura: [
          "El 20 de julio de 1810 el episodio del florero de Llorente encendió el grito de independencia en Santafé.",
          "Vino la Patria Boba, un periodo de divisiones entre centralistas y federalistas, y luego la Reconquista española.",
          "El 7 de agosto de 1819, la Batalla de Boyacá aseguró la independencia y nació la Gran Colombia.",
        ],
        claves: ["20 de julio", "Patria Boba", "Boyacá 1819"],
        quiz: [
          { q: "El grito de independencia fue el…", opciones: ["20 de julio de 1810", "7 de agosto de 1819", "12 de octubre"], correcta: 0 },
          { q: "La Batalla de Boyacá ocurrió en…", opciones: ["1819", "1810", "1830"], correcta: 0 },
          { q: "La Patria Boba se caracterizó por…", opciones: ["Unidad total", "Divisiones entre centralistas y federalistas", "Paz absoluta"], correcta: 1 },
        ],
      },
    ],
  },
  {
    slug: "6",
    nombre: "Sexto",
    etapa: "Bachillerato",
    descripcion: "Prehistoria y primeras civilizaciones.",
    temas: [
      {
        id: "6-prehistoria",
        titulo: "Prehistoria y hominización",
        resumen: "Del Paleolítico a la revolución neolítica.",
        dificultad: "Medio",
        minutos: 14,
        video: { titulo: "Paleolítico y Neolítico", busqueda: "prehistoria paleolitico neolitico resumen" },
        lectura: [
          "La hominización es el proceso de evolución desde los homínidos hasta el Homo sapiens.",
          "En el Paleolítico los grupos eran nómadas, cazadores y recolectores; dominaron el fuego y la piedra tallada.",
          "En el Neolítico aparecieron la agricultura y la ganadería: los grupos se volvieron sedentarios y surgieron las aldeas.",
        ],
        claves: ["Paleolítico", "Neolítico", "Sedentarismo"],
        quiz: [
          { q: "El sedentarismo aparece en el…", opciones: ["Paleolítico", "Neolítico", "Mesolítico"], correcta: 1 },
          { q: "En el Paleolítico las personas eran…", opciones: ["Agricultoras", "Nómadas cazadoras y recolectoras", "Industriales"], correcta: 1 },
          { q: "La revolución neolítica se basó en…", opciones: ["La agricultura y la ganadería", "La escritura", "La imprenta"], correcta: 0 },
        ],
      },
      {
        id: "6-mesopotamia",
        titulo: "Mesopotamia y Egipto",
        resumen: "Las civilizaciones fluviales y el nacimiento de la escritura.",
        dificultad: "Medio",
        minutos: 14,
        video: { titulo: "Mesopotamia y Egipto", busqueda: "mesopotamia y egipto civilizaciones antiguas resumen" },
        lectura: [
          "Mesopotamia surgió entre los ríos Tigris y Éufrates; allí se inventó la escritura cuneiforme hacia el 3300 a.C.",
          "El Código de Hammurabi es uno de los primeros conjuntos de leyes escritas.",
          "Egipto se desarrolló junto al Nilo, gobernado por faraones, con una religión politeísta y grandes pirámides.",
        ],
        claves: ["Cuneiforme", "Hammurabi", "Nilo", "Faraón"],
        quiz: [
          { q: "La escritura cuneiforme nació en…", opciones: ["Egipto", "Mesopotamia", "Grecia"], correcta: 1 },
          { q: "El río de Egipto es el…", opciones: ["Nilo", "Tigris", "Indo"], correcta: 0 },
          { q: "El Código de Hammurabi es…", opciones: ["Un mapa", "Un conjunto de leyes", "Un templo"], correcta: 1 },
        ],
      },
      {
        id: "6-grecia-roma",
        titulo: "Grecia y Roma",
        resumen: "Democracia ateniense, república e imperio romano.",
        dificultad: "Avanzado",
        minutos: 15,
        video: { titulo: "Grecia y Roma en 10 minutos", busqueda: "grecia y roma antigua resumen historia" },
        lectura: [
          "En Atenas nació la democracia: los ciudadanos participaban en la Asamblea, aunque mujeres, esclavos y extranjeros quedaban excluidos.",
          "Esparta, en cambio, era una sociedad militarizada.",
          "Roma pasó de Monarquía a República y luego a Imperio. Nos dejó el derecho romano, el latín y una enorme red de calzadas.",
        ],
        claves: ["Polis", "Democracia", "República", "Derecho romano"],
        quiz: [
          { q: "La democracia nació en…", opciones: ["Esparta", "Atenas", "Roma"], correcta: 1 },
          { q: "Roma tuvo estas etapas:", opciones: ["Monarquía, República, Imperio", "Imperio y feudalismo", "Solo República"], correcta: 0 },
          { q: "Un legado romano fundamental es…", opciones: ["El derecho", "El cuneiforme", "La pólvora"], correcta: 0 },
        ],
      },
    ],
  },
  {
    slug: "7",
    nombre: "Séptimo",
    etapa: "Bachillerato",
    descripcion: "Edad Media, Renacimiento y expansión europea.",
    temas: [
      {
        id: "7-feudalismo",
        titulo: "La Edad Media y el feudalismo",
        resumen: "Señores, vasallos y sociedad estamental.",
        dificultad: "Medio",
        minutos: 13,
        video: { titulo: "El feudalismo explicado", busqueda: "feudalismo edad media resumen" },
        lectura: [
          "Tras la caída del Imperio romano de Occidente (476 d.C.) Europa se fragmentó en feudos.",
          "El feudalismo era una relación de vasallaje: el señor daba tierra y protección; el vasallo, fidelidad y servicio.",
          "La sociedad estamental tenía tres grupos: nobleza, clero y campesinos o siervos.",
        ],
        claves: ["Feudo", "Vasallaje", "Estamentos"],
        quiz: [
          { q: "El Imperio romano de Occidente cayó en…", opciones: ["476 d.C.", "1492", "1000 a.C."], correcta: 0 },
          { q: "Los tres estamentos eran…", opciones: ["Nobleza, clero y campesinado", "Ricos, medios y pobres", "Reyes, papas y sabios"], correcta: 0 },
          { q: "El vasallo entregaba al señor…", opciones: ["Fidelidad y servicio militar", "Solo dinero", "Nada"], correcta: 0 },
        ],
      },
      {
        id: "7-renacimiento",
        titulo: "Renacimiento y humanismo",
        resumen: "El ser humano en el centro y la revolución de la imprenta.",
        dificultad: "Medio",
        minutos: 12,
        video: { titulo: "Renacimiento y humanismo", busqueda: "renacimiento humanismo resumen historia" },
        lectura: [
          "El Renacimiento (siglos XV y XVI) recuperó la cultura clásica grecolatina.",
          "El humanismo puso al ser humano y a la razón en el centro del pensamiento.",
          "La imprenta de Gutenberg (1450) multiplicó la difusión de libros e ideas.",
        ],
        claves: ["Humanismo", "Imprenta", "Mecenazgo"],
        quiz: [
          { q: "El humanismo pone en el centro…", opciones: ["Al ser humano y la razón", "A los dioses", "A los reyes"], correcta: 0 },
          { q: "La imprenta fue creada por…", opciones: ["Gutenberg", "Galileo", "Da Vinci"], correcta: 0 },
          { q: "El Renacimiento recuperó la cultura…", opciones: ["Grecolatina", "Egipcia", "China"], correcta: 0 },
        ],
      },
      {
        id: "7-expansion",
        titulo: "Expansión europea y economía colonial",
        resumen: "Rutas, mercantilismo y comercio de personas esclavizadas.",
        dificultad: "Avanzado",
        minutos: 14,
        video: { titulo: "Expansión ultramarina", busqueda: "expansion europea siglo xv mercantilismo" },
        lectura: [
          "Los avances en navegación (carabela, brújula, astrolabio) permitieron los viajes oceánicos.",
          "El mercantilismo buscaba acumular metales preciosos y controlar el comercio con las colonias.",
          "La trata transatlántica esclavizó a millones de africanos y transformó la demografía americana.",
        ],
        claves: ["Mercantilismo", "Carabela", "Trata transatlántica"],
        quiz: [
          { q: "El mercantilismo buscaba…", opciones: ["Acumular metales preciosos", "Repartir la riqueza", "Eliminar el comercio"], correcta: 0 },
          { q: "Un instrumento clave de navegación fue…", opciones: ["La brújula", "El telescopio Hubble", "El GPS"], correcta: 0 },
          { q: "La trata transatlántica trasladó forzadamente a…", opciones: ["Africanos esclavizados", "Turistas", "Científicos"], correcta: 0 },
        ],
      },
    ],
  },
  {
    slug: "8",
    nombre: "Octavo",
    etapa: "Bachillerato",
    descripcion: "Revoluciones que crearon el mundo moderno.",
    temas: [
      {
        id: "8-ilustracion",
        titulo: "Ilustración y Revolución Francesa",
        resumen: "Libertad, igualdad y fraternidad.",
        dificultad: "Avanzado",
        minutos: 15,
        video: { titulo: "Revolución Francesa", busqueda: "revolucion francesa causas y consecuencias resumen" },
        lectura: [
          "La Ilustración defendió la razón, la libertad, la igualdad ante la ley y la separación de poderes (Montesquieu, Rousseau, Locke).",
          "En 1789 estalló la Revolución Francesa contra el Antiguo Régimen; se tomó la Bastilla y se proclamó la Declaración de los Derechos del Hombre y del Ciudadano.",
          "Sus ideas inspiraron las independencias americanas y las constituciones modernas.",
        ],
        claves: ["Ilustración", "1789", "Separación de poderes"],
        quiz: [
          { q: "La Revolución Francesa comenzó en…", opciones: ["1789", "1810", "1848"], correcta: 0 },
          { q: "La separación de poderes fue propuesta por…", opciones: ["Montesquieu", "Napoleón", "Robespierre"], correcta: 0 },
          { q: "El lema revolucionario fue…", opciones: ["Libertad, igualdad y fraternidad", "Orden y progreso", "Paz y trabajo"], correcta: 0 },
        ],
      },
      {
        id: "8-industrial",
        titulo: "Revolución Industrial",
        resumen: "Máquina de vapor, fábricas y nuevas clases sociales.",
        dificultad: "Avanzado",
        minutos: 14,
        video: { titulo: "Revolución Industrial", busqueda: "revolucion industrial resumen consecuencias" },
        lectura: [
          "Comenzó en Inglaterra a finales del siglo XVIII con la máquina de vapor y la industria textil.",
          "Surgieron la burguesía industrial y el proletariado, con jornadas extensas y trabajo infantil.",
          "Trajo urbanización acelerada, ferrocarril y también contaminación y desigualdad.",
        ],
        claves: ["Máquina de vapor", "Burguesía", "Proletariado"],
        quiz: [
          { q: "La Revolución Industrial comenzó en…", opciones: ["Inglaterra", "Francia", "Alemania"], correcta: 0 },
          { q: "La clase obrera se llamó…", opciones: ["Proletariado", "Nobleza", "Clero"], correcta: 0 },
          { q: "Una consecuencia fue…", opciones: ["La urbanización acelerada", "El feudalismo", "El fin del comercio"], correcta: 0 },
        ],
      },
      {
        id: "8-siglo-xix-col",
        titulo: "Colombia en el siglo XIX",
        resumen: "Gran Colombia, guerras civiles y Constitución de 1886.",
        dificultad: "Avanzado",
        minutos: 14,
        video: { titulo: "Colombia siglo XIX", busqueda: "colombia siglo xix gran colombia constitucion 1886" },
        lectura: [
          "La Gran Colombia (1819-1830) se disolvió por conflictos entre centralistas y federalistas y por distancias regionales.",
          "El siglo XIX estuvo marcado por guerras civiles entre liberales y conservadores.",
          "La Constitución de 1886 impuso un Estado centralista y confesional que rigió más de cien años.",
        ],
        claves: ["Gran Colombia", "Bipartidismo", "1886"],
        quiz: [
          { q: "La Gran Colombia se disolvió en…", opciones: ["1830", "1886", "1810"], correcta: 0 },
          { q: "La Constitución de 1886 fue…", opciones: ["Centralista", "Federalista", "Socialista"], correcta: 0 },
          { q: "Los dos partidos tradicionales fueron…", opciones: ["Liberal y Conservador", "Verde y Rojo", "Radical y Popular"], correcta: 0 },
        ],
      },
    ],
  },
  {
    slug: "9",
    nombre: "Noveno",
    etapa: "Bachillerato",
    descripcion: "Guerras mundiales y Colombia en el siglo XX.",
    temas: [
      {
        id: "9-guerras",
        titulo: "Primera y Segunda Guerra Mundial",
        resumen: "Causas, desarrollo y consecuencias globales.",
        dificultad: "Avanzado",
        minutos: 16,
        video: { titulo: "Las dos guerras mundiales", busqueda: "primera y segunda guerra mundial resumen" },
        lectura: [
          "La Primera Guerra Mundial (1914-1918) se originó en rivalidades imperialistas, alianzas y nacionalismo; terminó con el Tratado de Versalles.",
          "La Segunda Guerra Mundial (1939-1945) enfrentó al Eje contra los Aliados; incluyó el Holocausto y las bombas atómicas de Hiroshima y Nagasaki.",
          "Al terminar se creó la ONU (1945) para preservar la paz y proteger los derechos humanos.",
        ],
        claves: ["1914-1918", "1939-1945", "ONU", "Versalles"],
        quiz: [
          { q: "La Segunda Guerra Mundial terminó en…", opciones: ["1945", "1918", "1939"], correcta: 0 },
          { q: "El Tratado de Versalles cerró la…", opciones: ["Primera Guerra Mundial", "Guerra Fría", "Guerra de Corea"], correcta: 0 },
          { q: "La ONU se creó en…", opciones: ["1945", "1919", "1960"], correcta: 0 },
        ],
      },
      {
        id: "9-guerra-fria",
        titulo: "Guerra Fría y descolonización",
        resumen: "Dos bloques, un mundo dividido.",
        dificultad: "Avanzado",
        minutos: 15,
        video: { titulo: "La Guerra Fría", busqueda: "guerra fria resumen bloques capitalista socialista" },
        lectura: [
          "Tras 1945 el mundo se dividió entre el bloque capitalista (EE. UU.) y el socialista (URSS).",
          "Hubo carrera armamentista, carrera espacial y conflictos indirectos como Corea, Vietnam y la crisis de los misiles.",
          "En paralelo, África y Asia vivieron procesos de descolonización. El Muro de Berlín cayó en 1989 y la URSS se disolvió en 1991.",
        ],
        claves: ["Bipolaridad", "Muro de Berlín", "Descolonización"],
        quiz: [
          { q: "El Muro de Berlín cayó en…", opciones: ["1989", "1961", "1991"], correcta: 0 },
          { q: "Los dos bloques eran…", opciones: ["Capitalista y socialista", "Norte y Sur", "Este y Oeste religioso"], correcta: 0 },
          { q: "La URSS se disolvió en…", opciones: ["1991", "1989", "1985"], correcta: 0 },
        ],
      },
      {
        id: "9-violencia",
        titulo: "La Violencia y el conflicto armado en Colombia",
        resumen: "De 1948 al proceso de paz.",
        dificultad: "Avanzado",
        minutos: 16,
        video: { titulo: "Conflicto armado colombiano", busqueda: "historia conflicto armado colombiano resumen" },
        lectura: [
          "El asesinato de Jorge Eliécer Gaitán en 1948 desató el Bogotazo y el periodo de La Violencia.",
          "El Frente Nacional (1958-1974) repartió el poder entre liberales y conservadores y excluyó otras fuerzas políticas.",
          "Surgieron guerrillas, paramilitares y narcotráfico. En 2016 se firmó el Acuerdo de Paz con las FARC-EP.",
        ],
        claves: ["Bogotazo", "Frente Nacional", "Acuerdo de Paz 2016"],
        quiz: [
          { q: "El Bogotazo ocurrió en…", opciones: ["1948", "1958", "1991"], correcta: 0 },
          { q: "El Frente Nacional repartió el poder entre…", opciones: ["Liberales y conservadores", "Militares y civiles", "Iglesia y Estado"], correcta: 0 },
          { q: "El Acuerdo de Paz con las FARC-EP se firmó en…", opciones: ["2016", "2002", "1991"], correcta: 0 },
        ],
      },
    ],
  },
  {
    slug: "10",
    nombre: "Décimo",
    etapa: "Media",
    descripcion: "Constitución, democracia y economía.",
    temas: [
      {
        id: "10-constitucion",
        titulo: "Constitución de 1991 y Estado colombiano",
        resumen: "Derechos fundamentales, tutela y ramas del poder.",
        dificultad: "Avanzado",
        minutos: 15,
        video: { titulo: "Constitución de 1991", busqueda: "constitucion politica de colombia 1991 explicada" },
        lectura: [
          "Colombia es un Estado social de derecho, democrático, participativo y pluralista.",
          "El poder se divide en tres ramas: ejecutiva, legislativa y judicial, con órganos de control como la Procuraduría, la Contraloría y la Defensoría.",
          "La acción de tutela protege de forma rápida los derechos fundamentales.",
        ],
        claves: ["Estado social de derecho", "Tutela", "Ramas del poder"],
        quiz: [
          { q: "La acción de tutela protege…", opciones: ["Los derechos fundamentales", "Los bienes de lujo", "Los contratos"], correcta: 0 },
          { q: "Las ramas del poder público son…", opciones: ["Ejecutiva, legislativa y judicial", "Militar, civil y religiosa", "Nacional y regional"], correcta: 0 },
          { q: "Colombia se define como…", opciones: ["Estado social de derecho", "Monarquía", "Estado confesional"], correcta: 0 },
        ],
      },
      {
        id: "10-democracia",
        titulo: "Participación ciudadana y democracia",
        resumen: "Mecanismos para incidir en lo público.",
        dificultad: "Medio",
        minutos: 12,
        video: { titulo: "Mecanismos de participación", busqueda: "mecanismos de participacion ciudadana colombia" },
        lectura: [
          "Los mecanismos de participación son: voto, plebiscito, referendo, consulta popular, cabildo abierto, iniciativa legislativa y revocatoria del mandato.",
          "La participación no se limita a votar: incluye veedurías, juntas de acción comunal y movilización social.",
          "Una democracia sana necesita ciudadanos informados y capaces de argumentar.",
        ],
        claves: ["Referendo", "Cabildo abierto", "Revocatoria"],
        quiz: [
          { q: "La revocatoria del mandato permite…", opciones: ["Retirar del cargo a un alcalde o gobernador", "Cambiar la Constitución", "Elegir jueces"], correcta: 0 },
          { q: "El cabildo abierto es…", opciones: ["Una reunión pública de la comunidad", "Una votación secreta", "Un impuesto"], correcta: 0 },
          { q: "Participar solo significa votar:", opciones: ["Falso", "Verdadero", "Depende del clima"], correcta: 0 },
        ],
      },
      {
        id: "10-economia",
        titulo: "Economía: conceptos básicos",
        resumen: "Sectores, oferta y demanda, indicadores.",
        dificultad: "Avanzado",
        minutos: 14,
        video: { titulo: "Conceptos básicos de economía", busqueda: "economia basica pib inflacion oferta demanda" },
        lectura: [
          "La economía estudia cómo se producen, distribuyen y consumen bienes y servicios con recursos escasos.",
          "Sectores: primario (extracción), secundario (industria) y terciario (servicios).",
          "Indicadores clave: PIB, inflación, desempleo y tasa de cambio.",
        ],
        claves: ["PIB", "Inflación", "Sectores económicos"],
        quiz: [
          { q: "La agricultura pertenece al sector…", opciones: ["Primario", "Secundario", "Terciario"], correcta: 0 },
          { q: "El PIB mide…", opciones: ["La producción total de un país", "La población", "El clima"], correcta: 0 },
          { q: "La inflación es…", opciones: ["El aumento general de precios", "La bajada de impuestos", "El desempleo"], correcta: 0 },
        ],
      },
    ],
  },
  {
    slug: "11",
    nombre: "Once",
    etapa: "Media",
    descripcion: "Globalización, derechos humanos y pensamiento crítico para el ICFES.",
    temas: [
      {
        id: "11-globalizacion",
        titulo: "Globalización y mundo contemporáneo",
        resumen: "Economía global, tecnología y desigualdad.",
        dificultad: "Avanzado",
        minutos: 15,
        video: { titulo: "Globalización explicada", busqueda: "globalizacion ventajas desventajas resumen" },
        lectura: [
          "La globalización es la interconexión económica, cultural, política y tecnológica entre países.",
          "Genera oportunidades (comercio, información, movilidad) pero también desigualdad, dependencia y pérdida cultural.",
          "Organismos como la OMC, el FMI y el Banco Mundial regulan buena parte del sistema económico global.",
        ],
        claves: ["Globalización", "OMC", "Desigualdad"],
        quiz: [
          { q: "La globalización implica…", opciones: ["Mayor interconexión mundial", "Aislamiento de países", "Fin del comercio"], correcta: 0 },
          { q: "Un organismo del comercio mundial es…", opciones: ["La OMC", "La FIFA", "La UNESCO"], correcta: 0 },
          { q: "Una crítica a la globalización es…", opciones: ["La desigualdad entre países", "Menos tecnología", "Menos comunicación"], correcta: 0 },
        ],
      },
      {
        id: "11-ddhh",
        titulo: "Derechos humanos y memoria",
        resumen: "Dignidad, víctimas, justicia transicional.",
        dificultad: "Avanzado",
        minutos: 14,
        video: { titulo: "Derechos humanos", busqueda: "derechos humanos declaracion universal 1948 explicacion" },
        lectura: [
          "La Declaración Universal de los Derechos Humanos (1948) reconoce la dignidad de todas las personas.",
          "Se clasifican en generaciones: civiles y políticos; económicos, sociales y culturales; y colectivos o del ambiente.",
          "La memoria histórica busca reconocer a las víctimas y evitar la repetición de la violencia.",
        ],
        claves: ["DUDH 1948", "Generaciones de derechos", "Memoria histórica"],
        quiz: [
          { q: "La DUDH fue proclamada en…", opciones: ["1948", "1919", "1991"], correcta: 0 },
          { q: "El derecho a un ambiente sano es de…", opciones: ["Tercera generación", "Primera generación", "Ninguna"], correcta: 0 },
          { q: "La memoria histórica busca…", opciones: ["Reconocer víctimas y no repetir", "Olvidar el pasado", "Justificar la violencia"], correcta: 0 },
        ],
      },
      {
        id: "11-icfes",
        titulo: "Competencias ciudadanas tipo ICFES",
        resumen: "Analizar fuentes, argumentar y resolver dilemas.",
        dificultad: "Avanzado",
        minutos: 16,
        video: { titulo: "Cómo resolver Sociales y Ciudadanas", busqueda: "icfes sociales y ciudadanas como resolver preguntas" },
        lectura: [
          "La prueba evalúa tres competencias: pensamiento social, interpretación de perspectivas y pensamiento reflexivo y sistémico.",
          "Estrategia: lee primero la pregunta, identifica qué se pide (causa, consecuencia, perspectiva) y descarta opciones extremas o absolutas.",
          "Practica leyendo mapas, gráficas, caricaturas y textos con posturas opuestas.",
        ],
        claves: ["Pensamiento social", "Perspectivas", "Argumentación"],
        quiz: [
          { q: "Una buena estrategia es…", opciones: ["Leer la pregunta antes del texto", "Responder al azar", "Elegir siempre la opción más larga"], correcta: 0 },
          { q: "Interpretar perspectivas significa…", opciones: ["Entender distintos puntos de vista", "Repetir datos", "Memorizar fechas"], correcta: 0 },
          { q: "Las opciones absolutas ('siempre', 'nunca') suelen ser…", opciones: ["Sospechosas", "Siempre correctas", "Irrelevantes"], correcta: 0 },
        ],
      },
    ],
  },
];

export const getGrado = (slug: string) => grados.find((g) => g.slug === slug);
export const getTema = (id: string) => {
  for (const g of grados) {
    const t = g.temas.find((t) => t.id === id);
    if (t) return { grado: g, tema: t };
  }
  return undefined;
};
export const totalTemas = grados.reduce((n, g) => n + g.temas.length, 0);
