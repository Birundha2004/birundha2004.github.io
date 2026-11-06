import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CaseStudy from "./components/CaseStudy";
import ProjectExplorer from "./components/ProjectExplorer";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CaseStudy />
        <ProjectExplorer />
        <ArchitectureDiagram />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
