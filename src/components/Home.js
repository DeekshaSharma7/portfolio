// import React, { useEffect, useState } from "react";
// import "../styles/Home.css";

// // Import your images
// import background1 from "../assets/background1.jpg"; // Replace with actual image paths
// import background2 from "../assets/background2.jpg";
// import background3 from "../assets/background3.jpg";
// import background4 from "../assets/background4.jpg";
// import background5 from "../assets/background5.jpg";

// const strings = [
//   "Software Developer",
//   "Web Developer",
//   "Mern Stack Developer",
//   "Frontend Developer",
//   "Learner",
// ];

// // Array of corresponding background images
// const backgrounds = [
//   background1,
//   background2,
//   background3,
//   background4,
//   background5,
// ];

// const Home = () => {
//   const [index, setIndex] = useState(0);
//   const [currentString, setCurrentString] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typeSpeed, setTypeSpeed] = useState(200); // Speed of typing/deleting

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentFullString = strings[index];
//       setCurrentString((prev) =>
//         isDeleting
//           ? currentFullString.substring(0, prev.length - 1)
//           : currentFullString.substring(0, prev.length + 1)
//       );

//       // Set speed based on whether we are typing or deleting
//       setTypeSpeed(isDeleting ? 100 : 200);

//       // If we have fully typed or deleted the string
//       if (!isDeleting && currentString === currentFullString) {
//         // Start deleting after a short pause
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && currentString === "") {
//         // Move to the next string after deleting
//         setIsDeleting(false);
//         setIndex((prevIndex) => (prevIndex + 1) % strings.length);
//       }
//     };

//     const interval = setInterval(handleTyping, typeSpeed);
//     return () => clearInterval(interval);
//   }, [currentString, isDeleting, index]);

//   // Set background style dynamically
//   const backgroundStyle = {
//     backgroundImage: `url(${backgrounds[index]})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh", // Full height
//   };

//   return (
//     <section className="home" id="home" style={backgroundStyle}>
//       <nav className="navbar">
//         <ul>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#education">Education</a>
//           </li>
//           <li>
//             <a href="#skills">Skills</a>
//           </li>
//           <li>
//             <a href="#experience">Experience</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <div className="overlay">
//         <div className="home-content">
//           <h2>Hello, I'm </h2>
//           <h1>Deeksha Sharma</h1>
//           <p className="animated-string">{currentString}</p>
//           <br />
//           {/* <p>
//             Explore my work, skills, and experiences below. Let's connect and
//             create something amazing together!
//           </p> */}
//           <a href="#projects" className="btn-primary">
//             View My Work
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;




// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar"; // Import Navbar

// Import your images
import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";

const strings = [
  "Software Developer",
  "Web Developer",
  "Mern Stack Developer",
  "Frontend Developer",
  "Learner",
];

const backgrounds = [
  background1,
  background2,
  background3,
  background4,
  background5,
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullString = strings[index];
      setCurrentString((prev) =>
        isDeleting
          ? currentFullString.substring(0, prev.length - 1)
          : currentFullString.substring(0, prev.length + 1)
      );

      setTypeSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && currentString === currentFullString) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentString === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    };

    const interval = setInterval(handleTyping, typeSpeed);
    return () => clearInterval(interval);
  }, [currentString, isDeleting, index]);

  const backgroundStyle = {
    backgroundImage: `url(${backgrounds[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <section className="home" id="home" style={backgroundStyle}>
      <Navbar /> {/* Use Navbar component */}
      <div className="overlay">
        <div className="home-content">
          <h2>Hello, I'm </h2>
          <h1>Deeksha Sharma</h1>
          <p className="animated-string">{currentString}</p>
          <br />
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
