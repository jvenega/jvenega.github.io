import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <div className="brand">TuNombre<span className="dot">.</span></div>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/about">Sobre mí</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
    </header>
  );
}
