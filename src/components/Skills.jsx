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
    Libraries: ["React", "Redux", "Axios", "Three.js", "TensorFlow", "Pandas", "NumPy"],
    Frameworks: ["Vue", "Angular", "Node.js", "Django", "Spring Boot", "Express.js"],
    "UI/UX Tools": ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"],
    "Database Tools": ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "Elasticsearch"],
  };

  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current = skillRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills], catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-card"
                  ref={(el) => {
                    if (!skillRefs.current[catIndex]) {
                      skillRefs.current[catIndex] = [];
                    }
                    skillRefs.current[catIndex][skillIndex] = el;
                  }}
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
