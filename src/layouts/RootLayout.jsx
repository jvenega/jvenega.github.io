import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";

export default function RootLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={
        isHome
          ? "h-screen overflow-hidden bg-slate-950 text-white" // Home: full-screen sin scroll
          : "min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      }
    >
      {/* Navbar común */}
      <Nav />

      {/* Contenido */}
      <main className={isHome ? "h-[calc(100vh-56px)] w-full" : "flex-1 w-full"}>
        {/* 
          Home traerá su propio Hero full-screen; 
          para las otras páginas, usamos un wrapper con ancho máximo y padding.
        */}
        {isHome ? (
          <Outlet />
        ) : (
          <div className="mx-auto w-full max-w-5xl px-4 py-8">
            <Outlet />
          </div>
        )}
      </main>

      {/* Footer solo en páginas internas (no en Home para no forzar scroll) */}
      {!isHome && (
        <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-slate-500">
          © {new Date().getFullYear()} Tu Nombre
        </footer>
      )}
    </div>
  );
}
