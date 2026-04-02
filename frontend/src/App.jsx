import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutLayout from "./pages/about/AboutLayout";
import AboutMe from "./pages/about/AboutMe";
import Skills from "./pages/about/Skills";
import Experience from "./pages/about/Experience";
import Education from "./pages/about/Education";

export default function App() {

  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-text-primary dark:text-(--dark-text-primary) transition-colors duration-500">

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        
            <Route path="/about" element={<AboutLayout />}>
              <Route index element={<AboutMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="education" element={<Education />} />
            </Route>

        </Routes>
      </AnimatePresence>

    </div>
  );
}