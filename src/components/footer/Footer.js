import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Eduardo Ruiz</h1>
        <p>Based in Japan</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="footer-sns">
        <div className="made-by">Made with ❤️ by Eduardo Ruiz</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/eduru/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://twitter.com/edurtwitt"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/edur/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
