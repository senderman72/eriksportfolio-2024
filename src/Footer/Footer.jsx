// Footer.js

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email: perssonerik7@gmail.com</p>
          <p>Phone: +46 722182577</p>
          <p>Location: Malmö, Sweden</p>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/erik-persson-081128222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 Ida Stjernborg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
