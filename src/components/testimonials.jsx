import React from 'react';
import './Testimonials.css';

const Testimonial = ({ bgColor, text, content, authorName, authorTitle }) => {
  return (
    <div className="testimonial-card" style={{ backgroundColor: bgColor }}>
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-author">
        <p className="author-name">{authorName}</p>
        <p className="author-title">{authorTitle}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      bgColor: '#f9f9f9',
      text: 'A reliable developer with a keen eye for detail',
      content: 'Aayush delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He\'s a dependable developer who collaborates seamlessly with the team.',
      authorName: 'Ethan Parker',
      authorTitle: 'Manager • TechFusion'
    },
    {
      bgColor: '#e3f2fd',
      text: 'Highly skilled and professional',
      content: 'Working with Aayush was a pleasure. His expertise in React and Node.js helped us deliver our project ahead of schedule. Highly recommended!',
      authorName: 'Sarah Johnson',
      authorTitle: 'CTO • InnovateTech'
    },
    {
      bgColor: '#fff3e0',
      text: 'Exceptional problem-solving skills',
      content: 'Aayush tackled complex problems with ease and provided solutions that were both efficient and scalable. His dedication to quality is unmatched.',
      authorName: 'Michael Brown',
      authorTitle: 'Lead Developer • CodeCraft'
    },
    {
      bgColor: '#fbe9e7',
      text: 'Great team player',
      content: 'Aayush is not only a talented developer but also a great team player. He always goes the extra mile to ensure the team\'s success.',
      authorName: 'Emily Davis',
      authorTitle: 'Project Manager • DevWorks'
    },
    {
      bgColor: '#e8f5e9',
      text: 'Innovative and creative',
      content: 'Aayush brought fresh ideas to the table and helped us innovate our product. His creativity and technical skills are top-notch.',
      authorName: 'David Wilson',
      authorTitle: 'Product Manager • NextGen'
    },
    {
      bgColor: '#f3e5f5',
      text: 'Reliable and efficient',
      content: 'Aayush consistently delivered high-quality work on time. His efficiency and reliability made him a valuable asset to our team.',
      authorName: 'Laura Martinez',
      authorTitle: 'Senior Developer • TechSolutions'
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>TESTIMONIALS</h2>
      <h3>Word on the street about me</h3>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            bgColor={testimonial.bgColor}
            text={testimonial.text}
            content={testimonial.content}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
