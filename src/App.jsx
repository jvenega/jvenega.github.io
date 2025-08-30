import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* 🔹 Home sin layout */}
      <Route path="/" element={<Home />} />

      {/* 🔹 Resto de páginas con RootLayout */}
      <Route element={<RootLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
