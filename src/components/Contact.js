// import React, { useState } from "react";
// import "../styles/Contact.css";
// import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form fields
//     if (!formData.name || !formData.email || !formData.message) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     // Simulate form submission
//     setIsSubmitted(true);
//     setError("");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-container">
//         <h2 className="h2-contact" >Contact Me</h2>
//         <div className="contact-info">
//           <a
//             href="https://www.google.com/maps/place/1234+Street+Name,+City,+Country"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="contact-item"
//           >
//             <FaMapMarkerAlt />
//             <p>Aligarh, Uttar Pradesh, India</p>
//           </a>
//           <a href="mailto:deekshasharma10782@gmail.com" className="contact-item">
//             <FaEnvelope />
//             <p>deekshasharma10782@gmail.com</p>
//           </a>
//         </div>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <h3>Send a Message</h3>
//           {isSubmitted && (
//             <p className="success-message">Message sent successfully!</p>
//           )}
//           {error && <p className="error-message">{error}</p>}
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//             ></textarea>
//           </div>
//           <button type="submit" className="submit-btn">
//             Send Message
//           </button>
//         </form>
//       </div><br/>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import "../styles/Contact.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_z6unpdc",
        "template_3pg05w6",
        formData,
        "78oDK9PsPv_Uk8L33"
      )
      .then((response) => {
        console.log(
          "Message sent successfully!",
          response.status,
          response.text
        );
        setIsSubmitted(true);
        setError("");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        setError("There was a problem sending your message.");
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="h2-contact">Contact Me</h2>
        <div className="contact-info">
          <a
            href="https://www.google.com/maps/place/1234+Street+Name,+City,+Country"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaMapMarkerAlt />
            <p>Aligarh, Uttar Pradesh, India</p>
          </a>
          <a
            href="mailto:deekshasharma10782@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />
            <p>deekshasharma10782@gmail.com</p>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send a Message</h3>
          {isSubmitted && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      <br />
    </section>
  );
};

export default Contact;
