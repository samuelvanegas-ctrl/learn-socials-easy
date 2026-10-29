import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGrado, type Grado } from "@/data/curriculum";
import { imagenGrado } from "@/data/imagenes-grado";
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
  const img = imagenGrado(grado.slug);

  return (
    <Pagina>
      <div className="relative overflow-hidden bg-gradient-noche text-primary-foreground">
        <img src={img} alt="" width={992} height={672} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
          <Link to="/grados" className="text-sm font-semibold text-accent">
            ← Todos los grados
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">{grado.etapa}</p>
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">{grado.nombre}</h1>
          <p className="mt-2 max-w-xl opacity-90">{grado.descripcion}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-5 px-4 py-12 sm:grid-cols-2">
        {grado.temas.map((t, i) => {
          const avance = porcentajeTema(store[t.id]);
          return (
            <Link
              key={t.id}
              to="/tema/$id"
              params={{ id: t.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-suave transition-shadow hover:shadow-elevada"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  width={992}
                  height={672}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: `${(i * 37) % 100}% ${(i * 53) % 100}%` }}
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-sol font-display text-sm font-extrabold text-sun-foreground shadow-elevada">
                  {i + 1}
                </span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                    {t.dificultad}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.minutos} min</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-extrabold group-hover:text-accent">{t.titulo}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t.resumen}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-gradient-sol" style={{ width: `${avance}%` }} />
                  </div>
                  <span className="text-xs font-bold text-accent">{avance}%</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Pagina>
  );
}
