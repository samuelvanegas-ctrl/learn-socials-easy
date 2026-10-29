import { createFileRoute, Link } from "@tanstack/react-router";
import { grados, totalTemas } from "@/data/curriculum";
import { Pagina } from "@/components/site-chrome";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero-sociales.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ParceroEstudio | Ciencias Sociales de 1° a 11°" },
      {
        name: "description",
        content:
          "Aprende Ciencias Sociales de primero de primaria a once: videos cortos, lecturas, clases en vivo y evaluaciones con barras de progreso.",
      },
      { property: "og:title", content: "ParceroEstudio | Ciencias Sociales de 1° a 11°" },
      {
        property: "og:description",
        content: "Videos cortos, lecturas, clases en vivo y evaluaciones de Ciencias Sociales para cada grado.",
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <Pagina>
      <section className="relative overflow-hidden bg-gradient-noche text-primary-foreground">
        <div className="rayos-sol absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div>
            <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
              Solo Ciencias Sociales
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Parchese y <span className="text-gradient-sol">estudie</span> sociales de 1° a 11°
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-90">
              Todos los temas de Ciencias Sociales, desde lo más fácil hasta lo más difícil: videos cortos,
              lecturas claras, clases en vivo con otras personas y evaluaciones que te muestran cuánto aprendiste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/grados"
                className="rounded-full bg-gradient-sol px-7 py-3 font-display text-sm font-bold text-sun-foreground shadow-elevada"
              >
                Elegir mi grado
              </Link>
              <Link
                to="/clases"
                className="rounded-full border border-primary-foreground/40 px-7 py-3 font-display text-sm font-bold"
              >
                Ver clases en vivo
              </Link>
            </div>
            <dl className="mt-10 flex gap-8 text-sm">
              {[
                ["11", "grados"],
                [`${totalTemas}`, "temas guiados"],
                [`${totalTemas * 3}`, "preguntas de evaluación"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-extrabold text-accent">{n}</dt>
                  <dd className="opacity-80">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex justify-center">
            <img
              src={hero}
              alt="Estudiantes explorando el mapa de Colombia y un globo terráqueo"
              width={1280}
              height={960}
              className="w-full rounded-3xl border-4 border-accent/60 shadow-elevada"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-background/95 p-3 shadow-elevada">
              <img src={logo.url} alt="Logo ParceroEstudio" className="w-24" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold">Cómo aprendes en ParceroEstudio</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            ["Video corto", "Una explicación rápida para entender la idea principal en pocos minutos."],
            ["Lectura guiada", "El tema explicado en palabras sencillas, con las ideas clave resaltadas."],
            ["Evaluación", "Preguntas al final de cada tema con calificación inmediata."],
            ["Clase en vivo", "Sesiones online con profe y otros estudiantes para resolver dudas."],
          ].map(([t, d], i) => (
            <article key={t} className="rounded-2xl border border-border bg-card p-6 shadow-suave">
              <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">Empieza por tu grado</h2>
          <Link to="/grados" className="text-sm font-bold text-accent">
            Ver todos →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {grados.slice(0, 8).map((g) => (
            <Link
              key={g.slug}
              to="/grado/$slug"
              params={{ slug: g.slug }}
              className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-elevada"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{g.etapa}</p>
              <h3 className="mt-1 font-display text-xl font-extrabold group-hover:text-accent">{g.nombre}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>
    </Pagina>
  );
}
