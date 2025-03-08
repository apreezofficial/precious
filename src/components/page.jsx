import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import Globe from "./globe";
import TestimonialSlider from "./testimonials";
import Mymg from "./pic.jpg";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="content">
          <h1>
            <span>Innovative</span> Code Developer
          </h1>
          <p>
            I'm Precious Adedokun, alias APCodeSphere, a skilled developer with years of experience.
            I started robotics in 2018 and web development in 2023, specializing in web development, 
            app development, cybersecurity, database management, and backend engineering.
          </p>
          <p>
            I build reliable and scalable solutions with a focus on smooth user interactions.
          </p>
          <p>
            A passionate developer with hands-on experience in building live projects. 
            An upcoming tech content creator and speaker.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="profile-pic">
          <img src={Mymg} alt="Profile" />
        </div>
      </motion.section>

      <Globe />

      {/* Banner Section */}
      <motion.div
        className="banner-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="banner">
          <span>✨ SECURE ✨ RELIABLE ✨ RESPONSIBLE ✨ DYNAMIC ✨ SEARCH OPTIMISED ✨ SCALABLE ✨ INTERACTIVE ✨ ENGAGING</span>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.section
        className="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Capabilities <span>🔥</span></h2>
        <div className="underline"></div>
        <p>I specialize in various areas of programming, offering web development, app development, cybersecurity, database management, and backend engineering solutions.</p>
        <div className="services-container">
          
          {[
            { icon: "fa-laptop-code", title: "Frontend Web Development", desc: "I create responsive, user-friendly web interfaces with a focus on seamless UX and performance." },
            { icon: "fa-server", title: "Backend Web Development", desc: "I build secure, scalable, and efficient backend systems, ensuring seamless data management and performance." },
            { icon: "fa-gamepad", title: "Game Development", desc: "I develop interactive and engaging games with a focus on performance and immersive user experiences." },
            { icon: "fa-database", title: "Database Management", desc: "I design, optimize, and manage databases for efficient data storage, retrieval, and security." },
            { icon: "fa-mobile-alt", title: "App Development", desc: "I build high-performance, scalable, and user-friendly applications for web and mobile platforms." },
            { icon: "fa-robot", title: "Automation Engineering", desc: "I create intelligent automation solutions for businesses to improve efficiency and scalability." },
            { icon: "fa-search", title: "Search Optimization", desc: "I optimize websites for better search engine visibility, higher rankings, and increased organic traffic." },
            { icon: "fa-palette", title: "UI/UX Design", desc: "Designing intuitive and visually appealing interfaces with a focus on user experience and modern design trends." },
            { icon: "fa-tools", title: "Web Maintenance and Support", desc: "Ensuring website security, performance, and updates for smooth and uninterrupted operation." }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <i className={`fas ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="underline"></div>
        <div className="projects-container">
          
          {[
            { name: "Weather App", link: "https://apweatherapp.vercel.app/", desc: "Stay ahead of the weather with real-time forecasts, dynamic backgrounds, and a sleek interface.", icons: ["fa-vuejs", "fa-css3-alt", "fa-js", "fa-cloud", "fa-database"] },
            { name: "Quotes Hub", link: "https://hub-eight-pied.vercel.app/#290", desc: "Discover and share powerful quotes on life, success, and motivation. Designed for seamless experience.", icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-bootstrap"] },
            { name: "Football Livescore Site", link: "https://ap-sports.vercel.app", desc: "Never miss a moment! Get live scores, match updates, and real-time stats from leagues worldwide.", icons: ["fa-php", "fa-plug", "fa-js", "fa-react", "fa-bootstrap", "fa-database"] }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <div className="project-header">
                <h3>{project.name}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
              </div>
              <p>{project.desc}</p>
              <div className="project-icons">
                {project.icons.map((icon, idx) => (
                  <i key={idx} className={`fa-brands ${icon}`}></i>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      <TestimonialSlider />
    </>
  );
}
