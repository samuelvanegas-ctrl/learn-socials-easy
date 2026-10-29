import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getTema, type Grado, type Tema } from "@/data/curriculum";
import { imagenGrado } from "@/data/imagenes-grado";
import { Pagina } from "@/components/site-chrome";
import { Quiz } from "@/components/quiz";
import { porcentajeTema, useProgreso } from "@/hooks/use-progreso";

export const Route = createFileRoute("/tema/$id")({
  loader: ({ params }) => {
    const res = getTema(params.id);
    if (!res) throw notFound();
    return res;
  },
  head: ({ loaderData }) => {
    const titulo = loaderData?.tema.titulo ?? "Tema";
    const desc = loaderData?.tema.resumen ?? "Tema de Ciencias Sociales";
    return {
      meta: [
        { title: `${titulo} | ParceroEstudio` },
        { name: "description", content: desc },
        { property: "og:title", content: `${titulo} | ParceroEstudio` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: TemaPagina,
});

function TemaPagina() {
  const { grado, tema } = Route.useLoaderData() as { grado: Grado; tema: Tema };
  const { store, marcar } = useProgreso();
  const p = store[tema.id];
  const avance = porcentajeTema(p);

  return (
    <Pagina>
      <div className="relative overflow-hidden bg-gradient-noche text-primary-foreground">
        <img
          src={imagenGrado(grado.slug)}
          alt=""
          width={992}
          height={672}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-16">
          <Link to="/grado/$slug" params={{ slug: grado.slug }} className="text-sm font-semibold text-accent">
            ← {grado.nombre}
          </Link>
          <h1 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">{tema.titulo}</h1>
          <p className="mt-2 opacity-90">{tema.resumen}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-primary-foreground/20">
              <div className="h-full bg-gradient-sol transition-all" style={{ width: `${avance}%` }} />
            </div>
            <span className="font-display text-sm font-bold text-accent">{avance}% del tema</span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-10 px-4 py-12">
        <section>
          <h2 className="font-display text-2xl font-extrabold">1. Video corto</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-suave">
            <div className="flex aspect-video items-center justify-center bg-gradient-noche text-center text-primary-foreground">
              <div className="px-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-sol text-2xl text-sun-foreground">
                  ▶
                </div>
                <p className="mt-4 font-display text-lg font-bold">{tema.video.titulo}</p>
                <p className="text-sm opacity-80">Explicación de {tema.minutos} minutos</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(tema.video.busqueda)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2 font-display text-sm font-bold text-primary-foreground"
              >
                Ver video explicativo
              </a>
              <button
                type="button"
                onClick={() => marcar(tema.id, { visto: !p?.visto })}
                className={`rounded-full border px-5 py-2 text-sm font-bold ${
                  p?.visto ? "border-success bg-success/10 text-success" : "border-border"
                }`}
              >
                {p?.visto ? "Video visto ✓" : "Marcar como visto"}
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold">2. Lectura</h2>
          <div className="mt-4 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-suave">
            {tema.lectura.map((par, i) => (
              <p key={i} className="leading-relaxed text-card-foreground">
                {par}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {tema.claves.map((c) => (
                <span key={c} className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-foreground">
                  {c}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => marcar(tema.id, { leido: !p?.leido })}
              className={`mt-2 rounded-full border px-5 py-2 text-sm font-bold ${
                p?.leido ? "border-success bg-success/10 text-success" : "border-border"
              }`}
            >
              {p?.leido ? "Lectura completada ✓" : "Marcar lectura como leída"}
            </button>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-extrabold">3. Evaluación</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Responde y mira de inmediato en qué vas. Necesitas 70% o más para dominar el tema.
          </p>
          <div className="mt-4">
            <Quiz
              preguntas={tema.quiz}
              puntajePrevio={p?.puntaje}
              onFinalizar={(puntaje) =>
                marcar(tema.id, { puntaje: Math.max(puntaje, p?.puntaje ?? 0) })
              }
            />
          </div>
        </section>

        <div className="flex justify-between border-t border-border pt-6">
          <Link to="/grado/$slug" params={{ slug: grado.slug }} className="text-sm font-bold text-accent">
            ← Volver a {grado.nombre}
          </Link>
          <Link to="/clases" className="text-sm font-bold text-accent">
            ¿Dudas? Clase en vivo →
          </Link>
        </div>
      </article>
    </Pagina>
  );
}
