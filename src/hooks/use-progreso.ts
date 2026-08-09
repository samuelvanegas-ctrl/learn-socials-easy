import { useCallback, useEffect, useState } from "react";

export type TemaProgreso = {
  leido?: boolean;
  visto?: boolean;
  puntaje?: number; // 0-100
};

type Store = Record<string, TemaProgreso>;

const KEY = "parceroestudio:progreso";

function read(): Store {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Store;
  } catch {
    return {};
  }
}

const listeners = new Set<(s: Store) => void>();

function write(next: Store) {
  window.localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((l) => l(next));
}

export function useProgreso() {
  const [store, setStore] = useState<Store>({});

  useEffect(() => {
    setStore(read());
    const l = (s: Store) => setStore({ ...s });
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const marcar = useCallback((temaId: string, patch: TemaProgreso) => {
    const actual = read();
    write({ ...actual, [temaId]: { ...actual[temaId], ...patch } });
  }, []);

  const reiniciar = useCallback(() => write({}), []);

  return { store, marcar, reiniciar };
}

export function porcentajeTema(p?: TemaProgreso) {
  if (!p) return 0;
  let total = 0;
  if (p.visto) total += 25;
  if (p.leido) total += 25;
  if (typeof p.puntaje === "number") total += Math.round((p.puntaje / 100) * 50);
  return Math.min(100, total);
}
