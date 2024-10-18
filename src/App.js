// import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import "./App.css";
// import Experience from "./components/Experience";
// import Education from "./components/Education";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Education/>
//       <Skills />
//       <Experience/>
//       <Projects />
//       <Contact />
//       <Footer/>
//     </div>
//   );
// }

// export default App;






import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";

import "./App.css";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main); // This loads the full particles.js bundle.
  };

  const particlesLoaded = (container) => {
    console.log(container); // Optional: for debugging or loading actions.
  };

  return (
    <div className="App">
      {/* Add Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1", // You can adjust the background color here.
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60, // Number of particles.
              density: {
                enable: true,
                value_area: 2000, // Adjusted particle density.
              },
            },
            color: {
              value: "#ffffff", // Particle color.
            },
            shape: {
              type: "polygon", // Changed shape to polygon.
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5, // Number of sides for polygon shape.
              },
              image: {
                src: "img/github.svg", // Image source for shape (if applicable).
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5, // Transparency.
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3, // Size of particles.
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6, // Speed of particles.
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse", // Effect on hover.
              },
              onclick: {
                enable: true,
                mode: "push", // Effect on click.
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 10,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      {/* Main content components */}
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


