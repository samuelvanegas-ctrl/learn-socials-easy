import { useState } from "react";
import type { Pregunta } from "@/data/curriculum";

export function Quiz({
  preguntas,
  onFinalizar,
  puntajePrevio,
}: {
  preguntas: Pregunta[];
  onFinalizar: (puntaje: number) => void;
  puntajePrevio?: number | undefined;
}) {
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);

  const aciertos = preguntas.filter((p, i) => respuestas[i] === p.correcta).length;
  const puntaje = Math.round((aciertos / preguntas.length) * 100);
  const completo = Object.keys(respuestas).length === preguntas.length;

  return (
    <div className="space-y-5">
      {preguntas.map((p, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-suave">
          <p className="font-display text-base font-semibold">
            {i + 1}. {p.q}
          </p>
          <div className="mt-3 grid gap-2">
            {p.opciones.map((o, j) => {
              const elegida = respuestas[i] === j;
              const esCorrecta = p.correcta === j;
              const estado = enviado
                ? esCorrecta
                  ? "border-success bg-success/10"
                  : elegida
                    ? "border-destructive bg-destructive/10"
                    : "border-border"
                : elegida
                  ? "border-accent bg-accent/15"
                  : "border-border hover:border-accent/60";
              return (
                <button
                  key={j}
                  type="button"
                  disabled={enviado}
                  onClick={() => setRespuestas((r) => ({ ...r, [i]: j }))}
                  className={`rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${estado}`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!enviado ? (
        <button
          type="button"
          disabled={!completo}
          onClick={() => {
            setEnviado(true);
            onFinalizar(puntaje);
          }}
          className="w-full rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-opacity disabled:opacity-40"
        >
          {completo ? "Calificar evaluación" : "Responde todas las preguntas"}
        </button>
      ) : (
        <div className="rounded-2xl bg-gradient-noche p-6 text-center text-primary-foreground">
          <p className="font-display text-3xl font-extrabold">{puntaje}%</p>
          <p className="mt-1 text-sm opacity-90">
            {aciertos} de {preguntas.length} correctas ·{" "}
            {puntaje >= 70 ? "¡Bien parcero, tema superado!" : "Repasa la lectura y vuelve a intentarlo."}
          </p>
          <button
            type="button"
            onClick={() => {
              setRespuestas({});
              setEnviado(false);
            }}
            className="mt-4 rounded-full bg-accent px-5 py-2 font-display text-sm font-bold text-accent-foreground"
          >
            Intentar de nuevo
          </button>
        </div>
      )}

      {typeof puntajePrevio === "number" && !enviado && (
        <p className="text-center text-sm text-muted-foreground">
          Tu mejor resultado hasta ahora: <strong>{puntajePrevio}%</strong>
        </p>
      )}
    </div>
  );
}
