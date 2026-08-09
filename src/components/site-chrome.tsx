import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/grados", label: "Grados" },
  { to: "/clases", label: "Clases en vivo" },
  { to: "/progreso", label: "Mi progreso" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Logo de ParceroEstudio" className="h-11 w-auto" />
          <span className="sr-only">ParceroEstudio</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-semibold">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center">
        <img src={logo.url} alt="ParceroEstudio" className="h-10 w-auto opacity-90" />
        <p className="text-sm text-muted-foreground">
          Parchese y estudie · Ciencias Sociales de primero a once
        </p>
      </div>
    </footer>
  );
}

export function Pagina({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
