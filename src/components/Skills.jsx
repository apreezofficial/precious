import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript",
    "Go",
    "Rust",
    "HTML",
    "CSS",
    "Vue",
    "Angular",
    "Node.js",
    "Django",
    "React",
    "Three.js",
    "Figma",
    "Adobe XD",
    "Framer",
    "MySQL",
    "Firebase",
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all skill cards
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill}
            className="skill-card"
            ref={(el) => (skillRefs.current[i] = el)} // Add ref to the array
          >
            <p className="skill-name">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
