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
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className="skill-card"
                  ref={(el) => (skillRefs.current.push(el))} // Add ref to the array
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
