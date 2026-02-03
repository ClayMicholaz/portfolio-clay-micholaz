import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Snowfall from "react-snowfall";

function App() {
  useSmoothScroll();

  return (
    <>
      <Snowfall
        color="#D1D5DB"
        snowflakeCount={140}
        speed={[0.4, 1.2]}
        radius={[1, 3]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
      <Navbar />
      <div
        id="scroll-container"
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
