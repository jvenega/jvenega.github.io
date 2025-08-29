import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  // 🚫 Home especial sin scroll
  if (location.pathname === "/") {
    return (
      <div className="h-screen overflow-hidden bg-slate-950 text-white">
        <Home />
      </div>
    );
  }

  // ✅ Resto de las páginas con Nav + footer
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden">
      <Nav />

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} Tu Nombre
      </footer>
    </div>
  );
}
