import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/404/404"; // Import your NotFound component


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />

      {/* Catch-all route for unmatched paths (404) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
