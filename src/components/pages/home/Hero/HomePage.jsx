import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center">
      {/* Fondo (claro/oscuro) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-100 to-blue-50 dark:from-black dark:via-slate-900 dark:to-blue-950" />

      {/* Spotlight decorativo (cambia de color según tema) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12%] -z-10 h-[680px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-30
                   bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,.25),_transparent_60%)]
                   dark:bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,.5),_transparent_70%)]"
      />

      {/* Badge trabajo actual */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm
                   dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
      >
        💼 Actualmente en <span className="font-semibold text-red-600 dark:text-red-400">Soporte TI</span> – DelfinGroup
      </motion.div>

      {/* Avatar */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        src="https://avatars.githubusercontent.com/u/00000000?v=4"  // reemplaza por tu foto
        alt="Foto de Juan José"
        className="h-28 w-28 rounded-full border-4 border-blue-500/70 bg-slate-200 object-cover shadow-lg dark:bg-slate-800"
      />

      {/* Nombre con gradiente rojo→azul (visible en ambos temas) */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
      >
        <span className="block text-slate-900 dark:text-white">Juan José</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300"
      >
        Desarrollador Fullstack · <strong>React</strong> · <strong>Django</strong> · <strong>Automatización TI</strong>
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition
                     hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
          aria-label="Ver proyectos"
        >
          Ver proyectos
          <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-100 px-5 py-3 font-semibold text-blue-800 transition
                     hover:-translate-y-0.5 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
                     dark:border-blue-600 dark:bg-blue-900/40 dark:text-blue-200 dark:hover:bg-blue-800"
          aria-label="Ir a contacto"
        >
          Contáctame
        </Link>
      </motion.div>
    </section>
  );
}
