// import React from "react";
// import "../styles/Education.css";

// const Education = () => {
//   const educationList = [
//     {
//       degree: "Master of Computer Applications (MCA)",
//       institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
//       year: "Completed in 2024",
//       details:
//         "Specialized in programming, software development, and data management with hands-on experience in web development and database systems.",
//     },
//     {
//       degree: "Bachelor of Science in Mathematics",
//       institution: "Dharam Samjh Degree College, Aligarh",
//       year: "Completed in 2021",
//       details:
//         "Focus on mathematical concepts, including calculus, algebra, statistics, and discrete mathematics.",
//     },
//     {
//       degree: "12th Grade",
//       institution: "Dharam Samjh Bal Mandir Sr. Sec. School, Aligarh",
//       year: "Completed in 2018",
//       details:
//         "Studied Science with a focus on Physics, Chemistry, and Mathematics.",
//     },
//     {
//       degree: "10th Grade",
//       institution: "Raghubir Bal Mandir Sr. Sec. School, Aligarh",
//       year: "Completed in 2016",
//       details:
//         "Completed foundational education with strong performance in Mathematics and Science subjects.",
//     },
//   ];

//   return (
//     <section className="education-section">
//       <h2>Education</h2>

//       <div className="education-list">
//         {educationList.map((item, index) => (
//           <div key={index} className="education-item">
//             <h3>{item.degree}</h3>
//             <p>
//               <strong>{item.institution}</strong>
//             </p>
//             <p>{item.year}</p>
//             <p>{item.details}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;



import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
      year: "Completed in 2024",
      details:
        "Specialized in programming, software development, and data management with hands-on experience in web development and database systems.",
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Dharam Samjh Degree College, Aligarh",
      year: "Completed in 2021",
      details:
        "Focus on mathematical concepts, including calculus, algebra, statistics, and discrete mathematics.",
    },
    {
      degree: "12th Grade",
      institution: "Dharam Samjh Bal Mandir Sr. Sec. School, Aligarh",
      year: "Completed in 2018",
      details:
        "Studied Science with a focus on Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "10th Grade",
      institution: "Raghubir Bal Mandir Sr. Sec. School, Aligarh",
      year: "Completed in 2016",
      details:
        "Completed foundational education with strong performance in Mathematics and Science subjects.",
    },
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>

      <div className="education-list">
        {educationList.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>
              <strong>{item.institution}</strong>
            </p>
            <p>{item.year}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>

      {/* Stylish line */}
      <div className="education-line"></div>
    </section>
  );
};

export default Education;
