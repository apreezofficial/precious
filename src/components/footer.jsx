import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/apreezofficial", icon: "fab fa-github" },
    { name: "Tiktok", url: "https://tiktok.com/@apcodesphere", icon: "fab fa-tiktok" },
    { name: "X", url: "https://x.com/apcodesphere", icon: "fab fa-x" },
    { name: "Instagram", url: "https://instagram.com/apcodesphere", icon: "fab fa-instagram" },
    { name: "Youtube", url: "https://youtube.com/@apcodesphere", icon: "fab fa-youtube" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Apcodesphere. All Rights Reserved.
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
