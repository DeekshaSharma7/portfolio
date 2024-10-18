
// Project.js
import React from 'react';
import '../styles/Projects.css'; // Import your CSS file

import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";
import pic10 from "../assets/pic10.png";
import pic11 from "../assets/pic11.png";

const projects = [
  {
    title: "Simple Calculator",
    description: "A basic calculator app using HTML, CSS, and JavaScript.",
    image: pic1, // Use the imported variable
    demoLink: "https://simple-1calculator1.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Simple_Calculator",
  },
  {
    title: "Landing Page",
    description:
      "A Travelling Landing Page utilizing HTML, CSS, and JavaScript.",
    image: pic2, // Use the imported variable
    demoLink: "https://01landing-page01.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Landing_Page",
  },
  {
    title: "Expense Tracker",
    description: "An Expense Tracker website using HTML, CSS, and JavaScript.",
    image: pic3, // Use the imported variable
    demoLink: "https://expense-1tracker01.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Expense_Tracker", // Update with your actual GitHub link or keep as is
  },
  {
    title: "Spotify Clone",
    description: "A Spotify clone website using HTML, CSS, and JavaScript.",
    image: pic4, // Use the imported variable
    demoLink: "https://spotify1-clone01.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Spotify-Clone", // Update with your actual GitHub link or keep as is
  },
  {
    title: "Color Picker App",
    description: "A Color picker App website using React.js",
    image: pic5, // Use the imported variable
    demoLink: "https://colorr-picker.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Color-picker", // Update with your actual GitHub link or keep as is
  },
  {
    title: "Cards",
    description: "API Integration website (for learning) using React.js",
    image: pic6, // Use the imported variable
    demoLink: "https://api-integrationn.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Api-integration-01", // Update with your actual GitHub link or keep as is
  },
  {
    title: "Scientific Calculator",
    description: "A Scientific calculator app using React.js",
    image: pic7, // Use the imported variable
    demoLink: "https://scientific1-calculator01.netlify.app/", // Replace with your actual demo link
    githubLink:
      "https://github.com/DeekshaSharma7/Scientific-Calculator-using-React",
  },
  {
    title: "To-Do List",
    description: "A To-Do List app using React.js, Redux toolkit",
    image: pic9, // Use the imported variable
    demoLink: "https://to-do-1list.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/To-do-List",
  },
  {
    title: "CRUD App",
    description: "A CRUD app using React.js, Redux toolkit",
    image: pic8, // Use the imported variable
    demoLink: "https://crud10-app.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/CRUD-App",
  },
  {
    title: "Chatify",
    description: "A Group Chat Application app using HTML, CSS, JavaScript",
    image: pic10, // Use the imported variable
    demoLink: "https://github.com/DeekshaSharma7/Group-Chat-App", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/Group-Chat-App",
  },
  {
    title: "Zerodha Clone App",
    description: "A Zerodha Clone app using React.js, BootStrap",
    image: pic11, // Use the imported variable
    demoLink: "https://zerodha1-clone1.netlify.app/", // Replace with your actual demo link
    githubLink: "https://github.com/DeekshaSharma7/CRUD-App",
  },
];

const Project = () => {
    return (
      // <section className="project" id="project">
      //     <h2 className="heading">My <span>Projects</span></h2>
      //     <div className="project-container">
      //         {projects.map((project, index) => (
      //             <div className="project-box" key={index}>
      //                 <img src={project.image} alt={project.title} />
      //                 <div className="project-layer">
      //                     <h4>{project.title}</h4>
      //                     <p>{project.description}</p>
      //                     <div className="project-links">
      //                         <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
      //                             Demo <i className='bx bx-link-external'></i>
      //                         </a>
      //                         <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
      //                             GitHub <i className='bx bx-link-external'></i>
      //                         </a>
      //                     </div>
      //                 </div>
      //             </div>
      //         ))}
      //     </div>
      // </section>
      <section className="project" id="project">
        <h2 className="p-heading">
          My Projects
        </h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-wrapper" key={index}>
              <div className="project-box">
                <img src={project.image} alt={project.title} />
                <div className="project-layer">
                  <h4>{project.title}</h4> {/* Inside hover overlay */}
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo <i className="bx bx-link-external"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="project-titleO">{project.title}</h4>{" "}
              {/* Outside the card */}
            </div>
          ))}
        </div>
        <div className="education-line"></div>
      </section>
    );
};

export default Project;
