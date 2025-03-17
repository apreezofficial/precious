import React, { useEffect, useRef } from "react";
import "./Journey.css";

const Journey = () => {
  const experiences = [
    {
      title: "Backend Sorcerer",
      company: "SME MANAGEMENT SYSTEM",
      mode: "Remote",
      timeframe: "Sept 2024 – Present",
      achievements: [
        "Architected a distributed microservices system handling 10M+ requests/day with 99.99% uptime.",
        "Optimized database queries, reducing latency by 40% and saving $200K annually in cloud costs.",
        "Implemented AI-driven anomaly detection, preventing 95% of potential system failures.",
      ],
    },
    {
      title: "Backend Engineer",
      company: "Boolen Builders",
      mode: "Remote",
      timeframe: "February 2025– Present",
      achievements: [
        "Developed a neural network for real-time fraud detection, achieving 98% accuracy.",
        "Spearheaded the integration of GPT-4 into customer support, reducing response time by 70%.",
        "Designed a reinforcement learning model for autonomous systems, improving efficiency by 35%.",
      ],
    },
    {
      title: "Cybersecurity Sentinel",
      company: "CipherCore Solutions",
      mode: "Intern",
      timeframe: "Jan 2025 – Present",
      achievements: [
        "Deployed a zero-trust architecture, reducing security breaches by 90%.",
        "Led a team to develop an AI-powered threat detection system.",
        "Conducted penetration testing, identifying and patching 50+ critical vulnerabilities.",
      ],
    },
    {
      title: "Full-Stack Wizard",
      company: "CodeHaven Technologies",
      mode: "Remote",
      timeframe: "May 2023 – Feb 2024",
      achievements: [
        "Built a scalable SaaS platform serving 500K+ users with sub-100ms response times.",
        "Integrated blockchain for secure transactions, increasing user trust by 60%.",
        "Developed a real-time collaboration tool, boosting team productivity by 40%.",
      ],
    },
    {
      title: "Software Architect",
      company: "Upwork",
      mode: "Remote",
      timeframe: "Sep 2023 – May 2024",
      achievements: [
        "Designed a cloud-native architecture for a Fortune 500 company, reducing costs by 25%.",
        "Led the migration of legacy systems to Kubernetes, improving scalability.",
        "Implemented CI/CD pipelines, reducing deployment times by 80%.",
      ],
    },
  ];

  const roleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    roleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      roleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="journey-container">
      <div className="timeline">
        {experiences.map((_, index) => (
          <div key={index} className="timeline-node"></div>
        ))}
      </div>
      <div className="roles">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="role-card"
            ref={(el) => (roleRefs.current[index] = el)}
          >
            <h2 className="role-title">{exp.title}</h2>
            <h3 className="company-name">{exp.company}</h3>
            <p className="work-mode">
              {exp.mode} | {exp.timeframe}
            </p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="achievement">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
