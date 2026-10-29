import { createFileRoute, Link } from "@tanstack/react-router";
import { grados } from "@/data/curriculum";
import { Pagina } from "@/components/site-chrome";
import { porcentajeTema, useProgreso } from "@/hooks/use-progreso";
import primaria from "@/assets/etapa-primaria.jpg";
import bachillerato from "@/assets/etapa-bachillerato.jpg";
import media from "@/assets/etapa-media.jpg";
import { imagenGrado } from "@/data/imagenes-grado";

const imagenesEtapa = { Primaria: primaria, Bachillerato: bachillerato, Media: media };

export const Route = createFileRoute("/grados")({
  head: () => ({
    meta: [
      { title: "Grados 1° a 11° | ParceroEstudio" },
      {
        name: "description",
        content: "Explora los temas de Ciencias Sociales de cada grado, de primaria a media, con su avance.",
      },
      { property: "og:title", content: "Grados 1° a 11° | ParceroEstudio" },
      { property: "og:description", content: "Temas de Ciencias Sociales por grado, de lo más fácil a lo más difícil." },
    ],
  }),
  component: Grados,
});

function Grados() {
  const { store } = useProgreso();

  return (
    <Pagina>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl font-extrabold">Todos los grados</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          El recorrido va de lo más sencillo (familia y barrio) a lo más exigente (globalización, derechos humanos
          y competencias tipo ICFES).
        </p>

        <div className="mt-10 space-y-10">
          {(["Primaria", "Bachillerato", "Media"] as const).map((etapa) => (
            <section key={etapa}>
              <div className="relative overflow-hidden rounded-3xl shadow-suave">
                <img
                  src={imagenesEtapa[etapa]}
                  alt={`Ilustración de ${etapa}`}
                  loading="lazy"
                  width={992}
                  height={672}
                  className="h-40 w-full object-cover md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                <h2 className="absolute bottom-4 left-5 font-display text-3xl font-extrabold text-primary-foreground">
                  {etapa}
                </h2>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {grados
                  .filter((g) => g.etapa === etapa)
                  .map((g) => {
                    const avance = Math.round(
                      g.temas.reduce((n, t) => n + porcentajeTema(store[t.id]), 0) / g.temas.length,
                    );
                    return (
                      <Link
                        key={g.slug}
                        to="/grado/$slug"
                        params={{ slug: g.slug }}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-suave transition-shadow hover:shadow-elevada"
                      >
                        <img src={imagenGrado(g.slug)} alt={`Ilustración de ${g.nombre}`} loading="lazy" width={992} height={672} className="h-32 w-full object-cover" />
                        <div className="p-6">
                        <div className="flex items-baseline justify-between">
                          <h3 className="font-display text-xl font-extrabold">{g.nombre}</h3>
                          <span className="text-sm font-bold text-accent">{avance}%</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{g.descripcion}</p>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full bg-gradient-sol" style={{ width: `${avance}%` }} />
                        </div>
                        <p className="mt-3 text-xs text-muted-foreground">{g.temas.length} temas</p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Pagina>
  );
}
