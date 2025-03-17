import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "fab fa-dribbble" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
