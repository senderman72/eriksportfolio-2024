import "./Navbar.css";
import Profilepic from "../assets/profilbild.png";
import Linkedin from "../assets/Linkedin.jpg";
import Darkmodetoggle from "../Darkmodetoggle/Darkmodetoggle";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-pic-container">
        <img className="nav-pic" src={Profilepic} />
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
      <div>
        <Darkmodetoggle />
      </div>
    </div>
  );
}
