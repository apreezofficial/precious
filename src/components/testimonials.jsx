import React, { useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'A reliable developer with a keen eye for detail',
      content: 'Aayush delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He\'s a dependable developer who collaborates seamlessly with the team.',
      authorName: 'Ethan Parker',
      authorTitle: 'Manager • TechFusion'
    },
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'Highly skilled and professional',
      content: 'Working with Aayush was a pleasure. His expertise in React and Node.js helped us deliver our project ahead of schedule. Highly recommended!',
      authorName: 'Sarah Johnson',
      authorTitle: 'CTO • InnovateTech'
    },
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'Exceptional problem-solving skills',
      content: 'Aayush tackled complex problems with ease and provided solutions that were both efficient and scalable. His dedication to quality is unmatched.',
      authorName: 'Michael Brown',
      authorTitle: 'Lead Developer • CodeCraft'
    },
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'Great team player',
      content: 'Aayush is not only a talented developer but also a great team player. He always goes the extra mile to ensure the team\'s success.',
      authorName: 'Emily Davis',
      authorTitle: 'Project Manager • DevWorks'
    },
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'Innovative and creative',
      content: 'Aayush brought fresh ideas to the table and helped us innovate our product. His creativity and technical skills are top-notch.',
      authorName: 'David Wilson',
      authorTitle: 'Product Manager • NextGen'
    },
    {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      text: 'Reliable and efficient',
      content: 'Aayush consistently delivered high-quality work on time. His efficiency and reliability made him a valuable asset to our team.',
      authorName: 'Laura Martinez',
      authorTitle: 'Senior Developer • TechSolutions'
    }
  ];

  // Initialize Slick Slider
  useEffect(() => {
    const initializeSlider = () => {
      $('.testimonials-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
      });
    };

    initializeSlider();
  }, []);

  return (
    <div className="testimonials-container">
      <h2>TESTIMONIALS</h2>
      <h3>Word on the street about me</h3>
      <div className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div
              className="testimonial-card"
              style={{ backgroundColor: testimonial.bgColor }}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.authorName}</p>
                <p className="author-title">{testimonial.authorTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
