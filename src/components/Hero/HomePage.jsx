import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-black via-slate-900 to-blue-950 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-1.5 text-xs font-medium text-slate-200"
      >
        💼 Soporte TI en <span className="text-red-400 font-semibold">DelfinGroup</span>
      </motion.div>

      {/* Avatar */}
      <motion.img
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src="https://avatars.githubusercontent.com/u/00000000?v=4"
        alt="Foto"
        className="h-28 w-28 rounded-full border-4 border-blue-500 object-cover shadow-lg"
      />

      {/* Nombre */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent"
      >
        Juan José
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 max-w-xl text-slate-300"
      >
        Fullstack Developer | React · Django · Automatización TI
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-8 flex gap-4"
      >
        <Link
          to="/projects"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2"
          aria-label="Ver proyectos"
        >
          Ver proyectos <ArrowRightIcon className="h-5 w-5" />
        </Link>

        <Link
          to="/contact"
          className="border border-blue-600 bg-blue-900/40 hover:bg-blue-800 px-6 py-3 rounded-xl text-blue-200 font-semibold"
          aria-label="Ir a contacto"
        >
          Contacto
        </Link>
      </motion.div>
    </section>
  );
}
