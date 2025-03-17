import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "TypeScript",
      "Go",
      "Rust",
      "Kotlin",
      "HTML",
      "CSS",
    ],
    Frameworks: ["React", "Vue", "Angular", "Node.js", "Django", "Spring Boot"],
    Libraries: ["Redux", "Axios", "Three.js", "TensorFlow", "Pandas", "NumPy"],
    "UI/UX Tools": ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"],
    "Database Tools": ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "Elasticsearch"],
  };

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-card"
                  ref={(el) => (skillRefs.current[index * skills.length + i] = el)}
                >
                  <p className="skill-name">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
