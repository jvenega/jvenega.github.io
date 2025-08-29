export default function Projects() {
  const items = [
    { title: "IKO Matsushima", link: "#", desc: "Plataforma Django + React." },
    { title: "Inventario BI", link: "#", desc: "Excel + Power BI + automatización." },
  ];
  return (
    <section>
      <h1>Proyectos</h1>
      <ul className="cards">
        {items.map((p) => (
          <li key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">Ver más</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
