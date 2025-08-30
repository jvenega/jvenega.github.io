import { useMemo, useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/pages/projects/ProjectCard";
import ProjectsFilter from "../components/pages/projects/ProjectsFilter";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [tech, setTech] = useState([]);

  const allCategories = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.category))),
    []
  );
  const allTechs = useMemo(
    () =>
      Array.from(
        new Set(PROJECTS.flatMap((p) => p.tech))
      ).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);

      const matchCategory = category === "Todos" || p.category === category;

      const matchTech =
        tech.length === 0 || tech.every((t) => p.tech.includes(t));

      return matchQuery && matchCategory && matchTech;
    });
  }, [query, category, tech]);

  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Proyectos
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          Algunos trabajos destacados y experimentos recientes.
        </p>
      </header>

      <ProjectsFilter
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        tech={tech}
        setTech={setTech}
        allCategories={allCategories}
        allTechs={allTechs}
      />

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          No se encontraron proyectos con esos filtros.
        </div>
      )}
    </section>
  );
}
