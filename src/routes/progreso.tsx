import { createFileRoute, Link } from "@tanstack/react-router";
import { grados, totalTemas } from "@/data/curriculum";
import { Pagina } from "@/components/site-chrome";
import { porcentajeTema, useProgreso } from "@/hooks/use-progreso";

export const Route = createFileRoute("/progreso")({
  head: () => ({
    meta: [
      { title: "Mi progreso en Sociales | ParceroEstudio" },
      {
        name: "description",
        content: "Barras de evaluación y avance por grado y tema para saber qué aprendiste en Ciencias Sociales.",
      },
      { property: "og:title", content: "Mi progreso en Sociales | ParceroEstudio" },
      { property: "og:description", content: "Revisa tu avance, tus puntajes y los temas que faltan por dominar." },
    ],
  }),
  component: Progreso,
});

function Progreso() {
  const { store, reiniciar } = useProgreso();

  const todos = grados.flatMap((g) => g.temas);
  const general = Math.round(todos.reduce((n, t) => n + porcentajeTema(store[t.id]), 0) / todos.length);
  const dominados = todos.filter((t) => (store[t.id]?.puntaje ?? 0) >= 70).length;
  const promedio = (() => {
    const notas = todos.map((t) => store[t.id]?.puntaje).filter((n): n is number => typeof n === "number");
    return notas.length ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length) : 0;
  })();

  return (
    <Pagina>
      <div className="bg-gradient-noche text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="font-display text-4xl font-extrabold">Mi progreso</h1>
          <p className="mt-2 opacity-90">Así vas en Ciencias Sociales de primero a once.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Avance general", `${general}%`],
              ["Temas dominados", `${dominados}/${totalTemas}`],
              ["Promedio en evaluaciones", `${promedio}%`],
            ].map(([l, v]) => (
              <div key={l} className="rounded-2xl bg-primary-foreground/10 p-5">
                <p className="text-sm opacity-80">{l}</p>
                <p className="font-display text-3xl font-extrabold text-accent">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-12">
        {grados.map((g) => {
          const avance = Math.round(g.temas.reduce((n, t) => n + porcentajeTema(store[t.id]), 0) / g.temas.length);
          return (
            <section key={g.slug} className="rounded-2xl border border-border bg-card p-6 shadow-suave">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-xl font-extrabold">{g.nombre}</h2>
                <span className="font-display text-sm font-bold text-accent">{avance}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full bg-gradient-sol" style={{ width: `${avance}%` }} />
              </div>
              <ul className="mt-4 space-y-2">
                {g.temas.map((t) => {
                  const pt = porcentajeTema(store[t.id]);
                  return (
                    <li key={t.id} className="flex items-center gap-3 text-sm">
                      <Link to="/tema/$id" params={{ id: t.id }} className="flex-1 hover:text-accent">
                        {t.titulo}
                      </Link>
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full bg-gradient-sol" style={{ width: `${pt}%` }} />
                      </div>
                      <span className="w-10 text-right text-xs text-muted-foreground">{pt}%</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <button
          type="button"
          onClick={reiniciar}
          className="rounded-full border border-border px-5 py-2 text-sm font-bold text-muted-foreground"
        >
          Reiniciar mi progreso
        </button>
      </div>
    </Pagina>
  );
}
