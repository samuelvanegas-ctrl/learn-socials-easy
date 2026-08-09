import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGrado, type Grado } from "@/data/curriculum";
import { Pagina } from "@/components/site-chrome";
import { porcentajeTema, useProgreso } from "@/hooks/use-progreso";

export const Route = createFileRoute("/grado/$slug")({
  loader: ({ params }) => {
    const grado = getGrado(params.slug);
    if (!grado) throw notFound();
    return grado;
  },
  head: ({ loaderData }) => {
    const nombre = loaderData?.nombre ?? "Grado";
    return {
      meta: [
        { title: `${nombre} · Ciencias Sociales | ParceroEstudio` },
        { name: "description", content: `Temas de Ciencias Sociales de ${nombre}: ${loaderData?.descripcion ?? ""}` },
        { property: "og:title", content: `${nombre} · Ciencias Sociales | ParceroEstudio` },
        { property: "og:description", content: `Videos, lecturas y evaluaciones de sociales para ${nombre}.` },
      ],
    };
  },
  component: GradoPagina,
});

function GradoPagina() {
  const grado = Route.useLoaderData() as Grado;
  const { store } = useProgreso();

  return (
    <Pagina>
      <div className="bg-gradient-noche text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <Link to="/grados" className="text-sm font-semibold text-accent">
            ← Todos los grados
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">{grado.etapa}</p>
          <h1 className="font-display text-4xl font-extrabold">{grado.nombre}</h1>
          <p className="mt-2 max-w-2xl opacity-90">{grado.descripcion}</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-4 px-4 py-12">
        {grado.temas.map((t, i) => {
          const avance = porcentajeTema(store[t.id]);
          return (
            <Link
              key={t.id}
              to="/tema/$id"
              params={{ id: t.id }}
              className="block rounded-2xl border border-border bg-card p-6 shadow-suave transition-shadow hover:shadow-elevada"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-sol font-display text-sm font-extrabold text-sun-foreground">
                  {i + 1}
                </span>
                <h2 className="font-display text-xl font-extrabold">{t.titulo}</h2>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  {t.dificultad}
                </span>
                <span className="text-xs text-muted-foreground">{t.minutos} min</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.resumen}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-gradient-sol" style={{ width: `${avance}%` }} />
                </div>
                <span className="text-xs font-bold text-accent">{avance}%</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Pagina>
  );
}
