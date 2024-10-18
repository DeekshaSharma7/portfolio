// // src/components/Experience.js

// import React from "react";
// import "../styles/Experience.css";

// // Sample experience data
// const experienceData = [
//   {
//     jobTitle: "Frontend Developer Intern",
//     company: "Alfabeto Global",
//     duration: "Jul 2024 - Present",
//     description:
//       "Worked on developing user interfaces using React and other modern technologies.",
//   },
  
// ];

// const Experience = () => {
//   return (
//     <section className="experience" id="experience">
//       <div className="exp-container">
//         <h2 className="h2-exp">Experience</h2>
//         <div className="experience-list">
//           {experienceData.map((exp, index) => (
//             <div className="experience-card" key={index}>
//               <h3>{exp.jobTitle}</h3>
//               <h4>{exp.company}</h4>
//               <p className="duration">{exp.duration}</p>
//               <p>{exp.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="education-line"></div>
//     </section>
//   );
// };

// export default Experience;



// src/components/Experience.js

import React from "react";
import "../styles/Experience.css";

// Sample experience data
const experienceData = [

  {
    jobTitle: "Frontend Developer Intern",
    company: "Alfabeto Global",
    duration: "Jul 2024 - Oct 2024",
    description:
      "Developed user interfaces using React, JavaScript, and modern front-end tools like Tailwind CSS. Collaborated with a cross-functional team to improve application performance and user experience.",
  },
 
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="exp-container">
        <h2 className="h2-exp">Experience</h2>
        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3 className="job-title">{exp.jobTitle}</h3>
              <h4 className="company-name">{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p className="job-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div><br/>
      <div className="education-line"></div>
    </section>
  );
};

export default Experience;
