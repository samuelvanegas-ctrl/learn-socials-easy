import type { Tema } from "./curriculum";

// Temas adicionales por grado, agregados después de los temas base de curriculum.ts.
export const extraTemas: Record<string, Tema[]> = {
  "1": [
    {
      id: "1-mis-grupos",
      titulo: "Los grupos a los que pertenecemos",
      resumen: "Familia, curso, equipo y barrio: grupos que nos cuidan y nos acompañan.",
      dificultad: "Fácil",
      minutos: 7,
      video: { titulo: "Los grupos a los que pertenecemos", busqueda: "grupos sociales para niños primaria" },
      lectura: [
        "Pertenecemos a muchos grupos: la familia, el curso del colegio, el equipo de fútbol o el grupo de la iglesia.",
        "En cada grupo hay acuerdos y roles: en el equipo hay capitán, en el curso hay monitor y en la casa todos ayudan.",
        "Los grupos nos cuidan, nos enseñan y nos divierten. Cuando colaboramos, el grupo funciona mejor para todos.",
      ],
      claves: ["Grupo social", "Pertenencia", "Acuerdos"],
      quiz: [
        { q: "Un grupo al que pertenecemos es…", opciones: ["La luna", "La familia", "Una bicicleta"], correcta: 1 },
        { q: "En los grupos los acuerdos…", opciones: ["Estorban", "No existen", "Ayudan a convivir"], correcta: 2 },
        { q: "Cuando colaboramos en un grupo…", opciones: ["Todo funciona mejor", "Peor", "Nada cambia"], correcta: 0 },
      ],
    },
    {
      id: "1-bienes-y-servicios",
      titulo: "¿De dónde salen las cosas que usamos?",
      resumen: "Bienes y servicios: quién los produce y cómo llegan a nosotros.",
      dificultad: "Fácil",
      minutos: 8,
      video: { titulo: "Bienes y servicios para niños", busqueda: "bienes y servicios para niños primero" },
      lectura: [
        "Las cosas que usamos, como el pan, los cuadernos y los juguetes, se llaman bienes, porque alguien los fabrica o cultiva.",
        "Otras cosas no se pueden tocar pero nos ayudan: la clase del profe, la consulta del médico o el paseo en bus. Son servicios.",
        "Todo llega a nuestras manos gracias al trabajo de muchas personas: quien cultiva, quien transporta y quien vende.",
      ],
      claves: ["Bienes", "Servicios", "Trabajo"],
      quiz: [
        { q: "Un bien es…", opciones: ["Un cuaderno", "Una clase", "Un paseo"], correcta: 0 },
        { q: "La consulta del médico es un…", opciones: ["Juguete", "Servicio", "Bien"], correcta: 1 },
        { q: "Los bienes llegan gracias a…", opciones: ["El trabajo de muchas personas", "La magia", "La lluvia"], correcta: 0 },
      ],
    },
  ],
  "2": [
    {
      id: "2-fiestas-y-tradiciones",
      titulo: "Fiestas y tradiciones de mi comunidad",
      resumen: "Las celebraciones cuentan quiénes somos y de dónde venimos.",
      dificultad: "Fácil",
      minutos: 9,
      video: { titulo: "Fiestas y tradiciones de Colombia", busqueda: "tradiciones y fiestas de colombia para niños" },
      lectura: [
        "Cada pueblo celebra fiestas propias: el Carnaval de Barranquilla, la Feria de las Flores, los cumpleaños del pueblo y la Semana Santa.",
        "Las tradiciones son costumbres que pasan de abuelos a padres y de padres a hijos: comidas, música, bailes y juegos.",
        "Conocer y respetar las tradiciones de otros nos hace más ricos en cultura y mejores amigos.",
      ],
      claves: ["Tradiciones", "Cultura", "Carnaval"],
      quiz: [
        { q: "El Carnaval de Barranquilla es una…", opciones: ["Tarea escolar", "Compra", "Tradición"], correcta: 2 },
        { q: "Las tradiciones se pasan…", opciones: ["De generación en generación", "Solo por internet", "Nadie las recuerda"], correcta: 0 },
        { q: "Respetar las fiestas de otros pueblos es…", opciones: ["Una pérdida de tiempo", "Un signo de respeto", "Prohibido"], correcta: 1 },
      ],
    },
    {
      id: "2-cuidar-el-planeta",
      titulo: "El clima y el cuidado del planeta",
      resumen: "Día y noche, estaciones y pequeñas acciones que cuidan la Tierra.",
      dificultad: "Fácil",
      minutos: 10,
      video: { titulo: "El clima y el cuidado del ambiente", busqueda: "el clima y el cuidado del planeta para niños" },
      lectura: [
        "El día y la noche se producen porque la Tierra gira sobre sí misma. Las estaciones del año cambian por su recorrido alrededor del Sol.",
        "El clima es el estado del cielo y del aire: puede estar soleado, lluvioso, ventoso o nublado.",
        "Cuidar el planeta es tarea de todos: ahorrar agua, separar residuos, no talar árboles y cuidar los animales.",
      ],
      claves: ["Día y noche", "Clima", "Cuidado del ambiente"],
      quiz: [
        { q: "El día y la noche se producen porque…", opciones: ["El Sol se apaga", "La Tierra gira", "Las nubes se mueven"], correcta: 1 },
        { q: "Separar las basuras ayuda a…", opciones: ["Ensuciar más", "Gastar agua", "Cuidar el planeta"], correcta: 2 },
        { q: "Las estaciones del año cambian por…", opciones: ["El recorrido de la Tierra alrededor del Sol", "El viento", "Las mareas"], correcta: 0 },
      ],
    },
  ],
  "3": [
    {
      id: "3-organizaciones",
      titulo: "Organizaciones de mi comunidad",
      resumen: "Juntas de Acción Comunal, clubes y comités: cómo la gente se organiza.",
      dificultad: "Fácil",
      minutos: 9,
      video: { titulo: "La Junta de Acción Comunal", busqueda: "junta de accion comunal para niños" },
      lectura: [
        "Cuando la comunidad se organiza, logra cosas que uno solo no puede: arreglar el parque, pedir el acueducto o crear una biblioteca.",
        "En los barrios existe la Junta de Acción Comunal (JAC), que reúne a los vecinos y los representa ante la alcaldía.",
        "También hay clubes deportivos, grupos de iglesia, cooperativas y comités. Participar es un derecho y un deber ciudadano.",
      ],
      claves: ["JAC", "Organización", "Participación"],
      quiz: [
        { q: "La JAC representa a…", opciones: ["Los vecinos del barrio", "El presidente", "Los turistas"], correcta: 0 },
        { q: "Las organizaciones comunitarias sirven para…", opciones: ["Resolver problemas juntos", "Organizar fiestas privadas", "Nada"], correcta: 0 },
        { q: "Participar en la comunidad es…", opciones: "Una moda", opciones2: null } as never,
      ],
    },
  ],
};
