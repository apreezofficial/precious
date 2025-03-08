import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animations
import './style.css';
import Globe from './globe';
import Testimonials from './testimonials';
import Mymg from './pic.jpg';

// Scroll Animation Component
const ScrollAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.6, delay }} // Add delay and smooth transition
    >
      {children}
    </motion.div>
  );
};

// Bounce Animation Variants
const bounceVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 }, // Start hidden, slightly above, and smaller
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring', // Spring animation for bounce effect
      stiffness: 100, // Adjust stiffness for more/less bounce
      damping: 10, // Adjust damping for more/less bounce
      delay: 0.3, // Slight delay before animation starts
    },
  },
};

// Globe Zoom-Out Animation Variants
const globeVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // Start hidden and smaller
  visible: {
    opacity: 1,
    scale: 1, // Zoom out to full size
    transition: {
      type: 'spring', // Spring animation for smooth zoom
      stiffness: 50, // Adjust stiffness for more/less bounce
      damping: 10, // Adjust damping for more/less bounce
      delay: 0.5, // Slight delay before animation starts
    },
  },
};

export default function Page() {
  return (
    <>
      {/* First Section with Bounce Effect */}
      <motion.section
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bounceVariants}
      >
        <div className="content">
          <h1>
            <span>Innovative</span> Code Developer
          </h1>
          <p>
            I'm Precious Adedokun, alias apcodesphere, a skilled developer with years of experience. I started robotics in 2018 and web development in 2023, specializing in web development, app development, cybersecurity, database management, and backend engineering.
          </p>
          <p>I build reliable and scalable solutions with a focus on smooth user interactions.</p>
          <p>A passionate developer with hands-on experience in building live projects. An upcoming tech content creator and speaker.</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="profile-pic">
          <img src={Mymg} alt="Profile" />
        </div>
      </motion.section>

      {/* Globe Component with Zoom-Out Effect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={globeVariants}
      >
        <Globe />
      </motion.div>

      {/* Banner Section */}
      <div className="banner-container">
        <div className="banner">
          <span>✨ SECURE ✨ RELIABLE ✨ RESPONSIBLE ✨ DYNAMIC ✨ SEARCH OPTIMISED ✨ SCALABLE ✨ INTERACTIVE ✨ ENGAGING</span>
        </div>
      </div>

      {/* Services Section with Scroll Animations */}
      <section className="services">
        <h2>
          Capabilities<span>🔥</span>
        </h2>
        <div className="underline"></div>
        <p>
          I specialize in various areas of programming, offering web development, app development, cybersecurity, database management, and backend engineering solutions.
        </p>
        <div className="services-container">
          {[
            { icon: 'fas fa-laptop-code', title: 'Frontend Web Development', description: 'I create responsive, user-friendly web interfaces with a focus on seamless UX, performance, and modern technologies.' },
            { icon: 'fas fa-server', title: 'Backend Web Development', description: 'I build secure, scalable, and efficient backend systems, ensuring seamless data management and performance.' },
            { icon: 'fas fa-gamepad', title: 'Game Development', description: 'I develop interactive and engaging games with a focus on performance, scalability, and immersive user experiences.' },
            { icon: 'fas fa-database', title: 'Database Management', description: 'I design, optimize, and manage databases for efficient data storage, retrieval, and security.' },
            { icon: 'fas fa-mobile-alt', title: 'App Development', description: 'I build high-performance, scalable, and user-friendly applications for web and mobile platforms.' },
            { icon: 'fas fa-robot', title: 'Automation Engineering', description: 'I build high-performance, scalable, and user-friendly applications for web and mobile platforms.' },
            { icon: 'fas fa-search', title: 'Search Optimisation', description: 'I optimize websites for better search engine visibility, higher rankings, and increased organic traffic.' },
            { icon: 'fas fa-palette', title: 'UI/UX Design', description: 'Designing intuitive and visually appealing interfaces with a focus on user experience and modern design trends.' },
            { icon: 'fas fa-tools', title: 'Web Maintenance and Support', description: 'Ensuring website security, performance, and updates for smooth and uninterrupted operation.' },
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

      {/* Projects Section with Scroll Animations */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="underline"></div>
        <div className="projects-container">
          {[
            {
              title: 'Weather App',
              link: 'https://apweatherapp.vercel.app/',
              description: 'Stay ahead of the weather with real-time forecasts, dynamic backgrounds, and a sleek interface. Get location-based updates, theme customization, and an intuitive experience—all in one app.',
              icons: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-js', 'fa-solid fa-cloud', 'fa-solid fa-database'],
            },
            {
              title: 'Quotes Hub',
              link: 'https://hub-eight-pied.vercel.app/#290',
              description: 'A hub of inspiration! Discover and share powerful quotes on life, success, and motivation. Designed for a seamless user experience, APQuotes Hub brings words that move you to your fingertips.',
              icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js', 'fab fa-bootstrap'],
            },
            {
              title: 'Football Livescore Site',
              link: 'https://ap-sports.vercel.app',
              description: 'Never miss a moment! Get live scores, match updates, and real-time stats from leagues worldwide. With a modern design and smooth experience, One Footy Stream keeps football fans connected to the game.',
              icons: ['fa-brands fa-php', 'fa-solid fa-plug', 'fa-brands fa-js', 'fa-brands fa-react', 'fab fa-bootstrap', 'fa-solid fa-database'],
            },
          ].map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <a href={project.link}>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <i key={i} className={icon}></i>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}
