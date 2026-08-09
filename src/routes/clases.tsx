import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Pagina } from "@/components/site-chrome";

export const Route = createFileRoute("/clases")({
  head: () => ({
    meta: [
      { title: "Clases en vivo de Sociales | ParceroEstudio" },
      {
        name: "description",
        content:
          "Únete a clases online de Ciencias Sociales con profesores y otros estudiantes, o abre tu propia sala de estudio.",
      },
      { property: "og:title", content: "Clases en vivo de Sociales | ParceroEstudio" },
      { property: "og:description", content: "Sesiones online de Ciencias Sociales para resolver dudas en grupo." },
    ],
  }),
  component: Clases,
});

type Sala = {
  titulo: string;
  profe: string;
  grado: string;
  hora: string;
  cupos: number;
  estado: "En vivo" | "Hoy" | "Próxima";
};

const salas: Sala[] = [
  { titulo: "Regiones de Colombia: mapa en vivo", profe: "Profe Camila", grado: "4° y 5°", hora: "4:00 p. m.", cupos: 12, estado: "En vivo" },
  { titulo: "Independencia paso a paso", profe: "Profe Andrés", grado: "5°", hora: "5:30 p. m.", cupos: 20, estado: "Hoy" },
  { titulo: "Taller: Revolución Francesa", profe: "Profe Laura", grado: "8°", hora: "6:00 p. m.", cupos: 25, estado: "Hoy" },
  { titulo: "Constitución de 1991 sin enredos", profe: "Profe Julián", grado: "10°", hora: "Mañana 3:00 p. m.", cupos: 30, estado: "Próxima" },
  { titulo: "Simulacro ICFES Sociales y Ciudadanas", profe: "Profe Camila", grado: "11°", hora: "Sábado 9:00 a. m.", cupos: 40, estado: "Próxima" },
  { titulo: "Grupo de estudio libre: prehistoria", profe: "Monitores", grado: "6°", hora: "Viernes 4:00 p. m.", cupos: 15, estado: "Próxima" },
];

function Clases() {
  const [inscritas, setInscritas] = useState<string[]>([]);

  return (
    <Pagina>
      <div className="bg-gradient-noche text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="font-display text-4xl font-extrabold">Clases en vivo</h1>
          <p className="mt-2 max-w-2xl opacity-90">
            Estudia acompañado: conéctate a una sala con profe y otros estudiantes, pregunta lo que no entendiste
            y repasa antes de la evaluación.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {salas.map((s) => {
            const inscrito = inscritas.includes(s.titulo);
            return (
              <article key={s.titulo} className="rounded-2xl border border-border bg-card p-6 shadow-suave">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      s.estado === "En vivo"
                        ? "bg-destructive/15 text-destructive"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {s.estado === "En vivo" ? "● En vivo" : s.estado}
                  </span>
                  <span className="text-xs text-muted-foreground">{s.cupos} cupos</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-extrabold">{s.titulo}</h2>
                <p className="text-sm text-muted-foreground">
                  {s.profe} · {s.grado} · {s.hora}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setInscritas((prev) =>
                      prev.includes(s.titulo) ? prev.filter((t) => t !== s.titulo) : [...prev, s.titulo],
                    )
                  }
                  className={`mt-4 w-full rounded-full px-5 py-2.5 font-display text-sm font-bold ${
                    inscrito
                      ? "border border-success bg-success/10 text-success"
                      : "bg-gradient-sol text-sun-foreground"
                  }`}
                >
                  {inscrito ? "Inscrito ✓ Te avisaremos" : s.estado === "En vivo" ? "Entrar ahora" : "Reservar cupo"}
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-accent/60 bg-accent/5 p-8 text-center">
          <h2 className="font-display text-2xl font-extrabold">¿Quieres estudiar con tus parceros?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Crea una sala de estudio, elige el tema de sociales y comparte el enlace con tu grupo para repasar juntos.
          </p>
          <button className="mt-5 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground">
            Crear sala de estudio
          </button>
        </div>
      </div>
    </Pagina>
  );
}
