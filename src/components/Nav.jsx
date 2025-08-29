import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {SunIcon, MoonIcon} from "@heroicons/react/24/solid";
import MenuIcon from "@heroicons/react/24/outline/Bars3Icon";
import XIcon from "@heroicons/react/24/outline/XMarkIcon";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "text-blue-500 dark:text-blue-400"
        : "text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="text-xl font-extrabold tracking-tight">
          JuanJosé<span className="text-blue-500">.</span> dev
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
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

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
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
          className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
        >
          {menuOpen ? (
            <XIcon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          ) : (
            <MenuIcon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              Sobre mí
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>
              Proyectos
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contacto
            </NavLink>

            {/* Theme toggle */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? (
                <>
                  <SunIcon className="h-5 w-5 text-yellow-400" /> <span>Modo claro</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5 text-slate-700 dark:text-slate-200" />{" "}
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
