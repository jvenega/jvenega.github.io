import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Dark mode persistente
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Fondo/sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    [
      "relative px-3 py-2 text-sm font-semibold transition rounded-md",
      isActive
        ? "text-red-500 dark:text-red-400"
        : "text-slate-800 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400",
      "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform",
      isActive ? "after:scale-x-100" : "hover:after:scale-x-100",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 backdrop-blur transition-colors",
        scrolled
          ? "border-b border-slate-200/40 bg-white/80 shadow-sm dark:border-slate-800/50 dark:bg-slate-950/80"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          JuanJosé<span className="text-red-500">.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            Sobre mí
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Proyectos
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>

          {/* Toggle dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 rounded-full p-2 transition hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
            aria-label="Cambiar tema"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            )}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-md p-2 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
          aria-label="Abrir menú"
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <NavLink to="/" end className={linkClass}>
              Inicio
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              Sobre mí
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Proyectos
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contacto
            </NavLink>

            {/* Toggle dark mode móvil */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
            >
              {darkMode ? (
                <>
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                  <span>Modo claro</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5" />
                  <span>Modo oscuro</span>
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
