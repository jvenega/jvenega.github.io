import { useMemo } from "react";

export default function ProjectsFilter({
  query,
  setQuery,
  category,
  setCategory,
  tech,
  setTech,
  allCategories,
  allTechs,
}) {
  const categories = useMemo(() => ["Todos", ...allCategories], [allCategories]);

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      {/* Búsqueda */}
      <div className="w-full sm:max-w-xs">
        <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
          Buscar
        </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Título o descripción..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>

      {/* Categoría */}
      <div className="sm:w-44">
        <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
          Categoría
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Tech (multiselección simple por click) */}
      <div className="sm:max-w-md">
        <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
          Tecnologías
        </label>
        <div className="flex flex-wrap gap-2">
          {allTechs.map((t) => {
            const active = tech.includes(t);
            return (
              <button
                key={t}
                type="button"
                onClick={() =>
                  active
                    ? setTech(tech.filter((x) => x !== t))
                    : setTech([...tech, t])
                }
                className={[
                  "rounded-md border px-2 py-1 text-xs font-medium transition",
                  active
                    ? "border-blue-600 bg-blue-600/10 text-blue-700 dark:border-blue-500 dark:bg-blue-500/10 dark:text-blue-300"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
                ].join(" ")}
                aria-pressed={active}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
