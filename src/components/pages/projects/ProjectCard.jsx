import { motion } from "framer-motion";

const StatusBadge = ({ status = "Activo" }) => {
    const styles = {
        Activo: "bg-green-600/10 text-green-600 border-green-600/30 dark:text-green-400 dark:bg-green-500/10 dark:border-green-500/30",
        WIP: "bg-yellow-600/10 text-yellow-700 border-yellow-600/30 dark:text-yellow-300 dark:bg-yellow-500/10 dark:border-yellow-500/30",
        Archivado: "bg-slate-600/10 text-slate-700 border-slate-600/30 dark:text-slate-300 dark:bg-slate-500/10 dark:border-slate-500/30",
    }[status] || "bg-slate-600/10 text-slate-700 border-slate-600/30 dark:text-slate-300 dark:bg-slate-500/10 dark:border-slate-500/30";

    return (
        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${styles}`}>
            {status}
        </span>
    );
};

export default function ProjectCard({ project }) {
    const {
        title,
        description,
        tech = [],
        category,
        year,
        image,
        liveUrl,
        codeUrl,
        status, // opcional: "Activo" | "WIP" | "Archivado"
    } = project;

    const hasLive = !!liveUrl && liveUrl !== "#";
    const hasCode = !!codeUrl && codeUrl !== "#";

    // Link principal: si hay live, card completa actúa como link
    const PrimaryWrapper = hasLive ? "a" : "div";
    const primaryProps = hasLive
        ? {
            href: liveUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `Abrir ${title} en una nueva pestaña`,
        }
        : {};

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
        >
            {/* Ribbon de estado */}
            {status && (
                <div className="pointer-events-none absolute right-0 top-0 z-10">
                    <div
                        className={[
                            "origin-top-right -translate-y-2 translate-x-10 rotate-45 px-8 py-1 text-xs font-bold text-white shadow",
                            status === "Activo" && "bg-green-600",
                            status === "WIP" && "bg-yellow-500 text-black",
                            status === "Archivado" && "bg-slate-600",
                        ].filter(Boolean).join(" ")}
                        aria-label={`Estado: ${status}`}
                        title={`Estado: ${status}`}
                    >
                        {status}
                    </div>
                </div>
            )}

            {/* Imagen / Fallback */}
            <PrimaryWrapper
                {...primaryProps}
                className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ${hasLive ? "cursor-pointer" : "cursor-default"
                    }`}
            >
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                            <svg className="h-8 w-8 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 19V5a2 2 0 0 0-2-2H5C3.9 3 3 3.9 3 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2ZM8.5 12 11 15l3.5-4.5L19 17H5l3.5-5Z" />
                            </svg>
                        </div>
                    )}
                </div>
            </PrimaryWrapper>

            {/* Contenido */}
            <div className="p-4 sm:p-5">
                <div className="mb-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        {category && (
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                {category}
                            </span>
                        )}
                        {status && <StatusBadge status={status} />}
                    </div>
                    {year && (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {year}
                        </span>
                    )}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {title}
                </h3>

                {description && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Tech badges */}
                {tech.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {tech.map((t) => (
                            <li
                                key={t}
                                className="rounded-md border border-blue-600/30 bg-blue-600/10 px-2 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Actions */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                    {/* Si no hay ninguno disponible */}
                    {!hasLive && !hasCode && (
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                            No disponible
                        </span>
                    )}

                    {/* Live */}
                    <a
                        href={hasLive ? liveUrl : undefined}
                        target={hasLive ? "_blank" : undefined}
                        rel={hasLive ? "noopener noreferrer" : undefined}
                        aria-disabled={!hasLive}
                        className={[
                            "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition",
                            hasLive
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "cursor-not-allowed bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
                        ].join(" ")}
                        onClick={(e) => {
                            if (!hasLive) e.preventDefault();
                        }}
                    >
                        Live
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3Z" />
                            <path d="M5 5h5v2H7v10h10v-3h2v5H5V5Z" />
                        </svg>
                    </a>

                    {/* Código */}
                    <a
                        href={hasCode ? codeUrl : undefined}
                        target={hasCode ? "_blank" : undefined}
                        rel={hasCode ? "noopener noreferrer" : undefined}
                        aria-disabled={!hasCode}
                        className={[
                            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition",
                            hasCode
                                ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                                : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-500",
                        ].join(" ")}
                        onClick={(e) => {
                            if (!hasCode) e.preventDefault();
                        }}
                    >
                        Código
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8.3 16.3 2 10l6.3-6.3L9.7 5.1 4.8 10l4.9 4.9-1.4 1.4Zm7.4 0-1.4-1.4 4.9-4.9-4.9-4.9L15.7 3.7 22 10l-6.3 6.3Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.article>
    );
}
