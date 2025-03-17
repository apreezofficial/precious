import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animations
import './style.css';
import Globe from './globe';
import Testimonials from './testimonials';
import Mymg from './pic.jpg';
import ContactForm from './ContactForm';
import Journey from './journey';
import Footer from './footer';
import Testbutt from './Testbutt';

// Scroll Animation Component
const ScrollAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Page() {
  return (
    <>
      {/* First Section */}
      <motion.section
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -50, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.3 },
          },
        }}
      >
        <div className="content">
          <h1>
            <span>Innovative</span> Code Developer
          </h1>
          <p>
            I'm Precious Adedokun, alias APCodeSphere, a Full Stack Developer with years of experience , Over 6 years in Robotics and over 3 years in Website, App and Game Development .
          </p>
          <p>I build reliable and scalable solutions with smooth user interactions.</p>
          <p>An upcoming tech content creator and speaker.</p>
    <a href="./Resume.txt" download="resume.txt">
  <button id="resume-btn">Download Resume</button>
</a>    </div>
        <div className="profile-pic">
          <img src={Mymg} alt="Profile" />
        </div>
      </motion.section>

      {/* Globe Component */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 50, damping: 10, delay: 0.5 },
          },
        }}
      >
        <Globe />
      </motion.div>

      {/* Services Section */}
      <section className="services">
        <h2>
          Capabilities<span>🔥</span>
        </h2>
        <div className="underline"></div>
        <p>
          I specialize in web and app development, cybersecurity, database management, and backend engineering.
        </p>
        <div className="services-container">
          {[
            { icon: 'fas fa-laptop-code', title: 'Frontend Web Development', description: 'I create modern, interactive, and responsive web applications.' },
            { icon: 'fas fa-server', title: 'Backend Development', description: 'I develop secure, scalable server-side applications and APIs.' },
            { icon: 'fas fa-gamepad', title: 'Game Development', description: 'I build engaging games with real-time interaction and smooth performance.' },
            { icon: 'fas fa-database', title: 'Database Management', description: 'I optimize databases for security, efficiency, and scalability.' },
            { icon: 'fas fa-mobile-alt', title: 'App Development', description: 'Building cross-platform mobile and web applications with high performance.' },
            { icon: 'fas fa-robot', title: 'Automation Engineering', description: 'I develop automation systems for workflow optimization and efficiency.' },
            { icon: 'fas fa-search', title: 'Search Optimization', description: 'Enhancing website SEO for better rankings and visibility.' },
            { icon: 'fas fa-palette', title: 'UI/UX Design', description: 'Designing intuitive, accessible, and user-friendly interfaces.' },
            { icon: 'fas fa-tools', title: 'Web Maintenance', description: 'Ensuring optimal performance, security, and updates for websites.' },
          ].map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="service-card">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="text-white">Projects</h2>
        <div className="underline"></div>
        <div className="projects-container">
          {[
            { title: 'AP-AI', link: 'https://ap-ai.vercel.app/', description: 'A modern and feature-rich platform designed for seamless AI-powered interactions, offering smart automation and intelligent responses for businesses and individuals.', icons: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-js', 'fa-brands fa-php', 'fa-solid fa-cloud'] },
            { title: 'Restaurant Site', link: 'https://sausyfoods.vercel.app', description: 'A sleek and user-friendly restaurant website that highlights the menu, reservations, online orders, and customer reviews, ensuring a delightful dining experience.', icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'] },
               { title: 'Apgrico', link: '', description: 'A smart Agriculture landing page website for marketing and sales of products.', icons: ['fa-brands fa-react', 'fa-brands fa-js', 'fa-solid fa-cloud'] },
         { title: 'Shepherd College', link: 'https://shepherdhub.netlify.app', description: 'An educational platform for learning and has more features for student ease of use.', icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'] },
      { title: 'Tower Game', link: 'https://towerofbabelgame.vercel.app/', description: 'A captivating and immersive Game showcasing the legendary Tower of Hangbel, featuring its history, lore, and stunning visual elements.', icons: ['fa-solid fa-gamepad', 'fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-js', 'fa-solid fa-cloud'] },
            { title: 'Football Livescore Site', link: 'https://apsports.vercel.app', description: 'Live football scores, match updates, and news.', icons: ['fa-brands fa-php', 'fa-solid fa-plug', 'fa-brands fa-js'] },
            { title: 'APGame Zone', link: '', description: 'A platform for interactive online games.', icons: ['fa-brands fa-react', 'fa-brands fa-js', 'fa-solid fa-gamepad'] },
            { title: 'Weather App', link: 'https://apweatherapp.vercel.app/', description: 'Real-time forecasts with location tracking and customizable themes.', icons: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-js', 'fa-solid fa-cloud'] },
            { title: 'APCal App', link: 'https://apcal.vercel.app', description: 'A smart calendar app for organizing tasks and events.', icons: ['fa-brands fa-react', 'fa-brands fa-js', 'fa-solid fa-calendar'] },
          ].map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <a href={project.link}>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                {/* Truncate description to 70 characters */}
                <p>
                  {project.description.length > 70
                    ? `${project.description.substring(0, 70)}...`
                    : project.description}
                </p>
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <center><i key={i} className={icon}></i></center>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <center><h2 className="text-white">Testimonials</h2></center>
      <p className="text-center"><i>What they are saying about me</i></p>
      <Testimonials />
      <Testbutt />
      <ContactForm />
      <center><h2 className="text-white">My Journey</h2></center>
      <Journey />
      <Footer />
    </>
  );
}
