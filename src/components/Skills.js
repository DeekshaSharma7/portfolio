// // import React from "react";
// // import {
// //   FaHtml5,
// //   FaCss3Alt,
// //   FaJs,
// //   FaReact,
// //   FaNodeJs,
// //   FaGitAlt,
// //   FaDatabase,
// // } from "react-icons/fa";
// // import "../styles/Skills.css";

// // const Skills = () => {
// //   const skills = [
// //     { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
// //     { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
// //     { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
// //     { name: "React", icon: <FaReact />, color: "#61DAFB" },
// //     { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
// //     { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
// //     { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
// //   ];

// //   return (
// //     <section className="skills-section">
// //       <div className="skill-heading">
// //         <h2>Skills</h2>
// //       </div>

// //       <div className="skills-grid">
// //         {skills.map((skill, index) => (
// //           <div
// //             key={index}
// //             className="skill-card"
// //             style={{ borderColor: skill.color }}
// //           >
// //             <div className="skill-icon" style={{ color: skill.color }}>
// //               {skill.icon}
// //             </div>
// //             <h3>{skill.name}</h3>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="education-line"></div>
// //     </section>
// //   );
// // };

// // export default Skills;





// import React from "react";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import { skills } from "./skills-data"; // Import skills data
// import "../styles/Skills.css";

// const Skills = () => {
//   return (
//     <div className="pt-3 pb-3">
//       <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
//       <Row className="d-flex justify-content-around">
//         {/* Frontend Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Frontend
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 {skills.frontend.map((skill, index) => (
//                   <span className="p-2" key={index}>
//                     <a
//                       className="text-dark text-decoration-none"
//                       href={skill.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={skill.imgSrc}
//                         alt={skill.imgAltText}
//                         rounded
//                         className="image-style m-1"
//                       ></Image>{" "}
//                       {skill.skillName}
//                     </a>
//                   </span>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Backend Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Backend
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 {skills.backend.map((skill, index) => (
//                   <span className="p-2" key={index}>
//                     <a
//                       className="text-dark text-decoration-none"
//                       href={skill.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={skill.imgSrc}
//                         alt={skill.imgAltText}
//                         rounded
//                         className="image-style m-1"
//                       ></Image>{" "}
//                       {skill.skillName}
//                     </a>
//                   </span>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Hosting Platforms Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Hosting Platforms
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 {skills.hostingPlatforms.map((skill, index) => (
//                   <span className="p-2" key={index}>
//                     <a
//                       className="text-dark text-decoration-none"
//                       href={skill.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={skill.imgSrc}
//                         alt={skill.imgAltText}
//                         rounded
//                         className="image-style m-1"
//                       ></Image>{" "}
//                       {skill.skillName}
//                     </a>
//                   </span>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Programming Languages Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Programming Languages
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 {skills.programmingLanguages.map((skill, index) => (
//                   <span className="p-2" key={index}>
//                     <a
//                       className="text-dark text-decoration-none"
//                       href={skill.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={skill.imgSrc}
//                         alt={skill.imgAltText}
//                         rounded
//                         className="image-style m-1"
//                       ></Image>{" "}
//                       {skill.skillName}
//                     </a>
//                   </span>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Database Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Databases
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 {skills.databases.map((skill, index) => (
//                   <span className="p-2" key={index}>
//                     <a
//                       className="text-dark text-decoration-none"
//                       href={skill.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={skill.imgSrc}
//                         alt={skill.imgAltText}
//                         rounded
//                         className="image-style m-1"
//                       ></Image>{" "}
//                       {skill.skillName}
//                     </a>
//                   </span>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Version Control Section */}
//         <Col md={4}>
//           <Card className="focus mt-2 mb-2">
//             <Card.Body>
//               <Card.Title className="text-center card-title">
//                 Version Control
//               </Card.Title>
//               <hr />
//               <Card.Text className="card-text d-flex justify-content-start flex-column">
//                 <span className="p-2">
//                   <a
//                     className="text-dark text-decoration-none"
//                     href={skills.versionControl[0].link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={skills.versionControl[0].imgSrc}
//                       alt={skills.versionControl[0].imgAltText}
//                       rounded
//                       className="image-style m-1"
//                     ></Image>{" "}
//                     {skills.versionControl[0].skillName}
//                   </a>
//                 </span>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Skills;




import React from "react";
import { skills } from "./skills-data"; // Import skills data
import "../styles/Skills.css"; // Custom CSS

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      {/* <h1 className="title">Tech Skills</h1> */}
      <h2 className="h2-contact">TECH SKILLS</h2>

      <div className="skills-grid">
        {/* Frontend Section */}
        <div className="card">
          <h2 className="card-title">Frontend</h2>
          <hr />
          <div className="skills-list">
            {skills.frontend.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.imgAltText}
                  className="skill-image"
                />
                {skill.skillName}
              </a>
            ))}
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="card">
          <h2 className="card-title">Programming Languages</h2>
          <hr />
          <div className="skills-list">
            {skills.programmingLanguages.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.imgAltText}
                  className="skill-image"
                />
                {skill.skillName}
              </a>
            ))}
          </div>
        </div>

        {/* Hosting Platforms Section */}
        <div className="card">
          <h2 className="card-title">Hosting Platforms</h2>
          <hr />
          <div className="skills-list">
            {skills.hostingPlatforms.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.imgAltText}
                  className="skill-image"
                />
                {skill.skillName}
              </a>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="card">
          <h2 className="card-title">Backend</h2>
          <hr />
          <div className="skills-list">
            {skills.backend.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.imgAltText}
                  className="skill-image"
                />
                {skill.skillName}
              </a>
            ))}
          </div>
        </div>

        {/* Database Section */}
        <div className="card">
          <h2 className="card-title">Databases</h2>
          <hr />
          <div className="skills-list">
            {skills.databases.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.imgAltText}
                  className="skill-image"
                />
                {skill.skillName}
              </a>
            ))}
          </div>
        </div>

        {/* Version Control Section */}
        <div className="card">
          <h2 className="card-title">Version Control</h2>
          <hr />
          <div className="skills-list">
            <a
              href={skills.versionControl[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-item"
            >
              <img
                src={skills.versionControl[0].imgSrc}
                alt={skills.versionControl[0].imgAltText}
                className="skill-image"
              />
              {skills.versionControl[0].skillName}
            </a>
          </div>
        </div>
      </div>

      <div className="education-line"></div>
    </div>
  );
};

export default Skills;
