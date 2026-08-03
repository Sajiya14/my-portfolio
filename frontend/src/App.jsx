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
import RoyalItUI from "./pages/Projects/RoyalItUI";
import TfsUi from "./pages/Projects/TfsUi";
import Footer from "./components/Footer";


export default function App() {

  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-(--dark-text-primary) transition-colors duration-500">

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/royalItUI" element={<RoyalItUI />} />
          <Route path="/TfsUi" element={<TfsUi />} />

            <Route path="/about" element={<AboutLayout />}>
              <Route index element={<AboutMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="education" element={<Education />} />
            </Route>

        </Routes>
      </AnimatePresence>

      <Footer />

    </div>
  );
}