import "./Contact.css";
import Profilepic from "../assets/profilbild.png";
import Linkedin from "../assets/Linkedin.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      <img className="profile-pic " src={Profilepic} alt="" />
      <h2>Contact Me</h2>
      <p>Feel free to reach out through the following channels:</p>

      <div className="contact-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span>perssonerik7@gmail.com</span>
        </div>

        <div className="info-item">
          <span className="info-label">Phone:</span>
          <span>+46-72 2182577</span>
        </div>

        <div>
          {" "}
          <a
            href="https://www.linkedin.com/in/ida-stjernborg-62796b222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin-logo" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
