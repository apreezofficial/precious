import React, { useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      bgColor: 'rgba(249, 249, 249, 0.7)', // Light gray
      text: 'A reliable developer with a keen eye for detail',
      content: 'He delivered exceptional work on our projects.His meticulous approach and strong communication greatly enhanced the quality of our web applications.',
      authorName: 'Ethan Parker',
      authorTitle: 'Manager • TechFusion'
    },
    {
      bgColor: 'rgba(227, 242, 253, 0.7)', // Light blue
      text: 'Highly skilled and professional',
      content: 'Working with Precious was a pleasure. His expertise in React and Node.js helped us deliver our project ahead of schedule. Highly recommended!',
      authorName: 'Sarah Johnson',
      authorTitle: 'CTO • InnovateTech'
    },
    {
      bgColor: 'rgba(255, 243, 224, 0.7)', // Light orange
      text: 'Exceptional problem-solving skills',
      content: 'Precious tackled complex problems with ease and provided solutions that were both efficient and scalable. His dedication to quality is unmatched.',
      authorName: 'Michael Brown',
      authorTitle: 'Lead Developer • CodeCraft'
    },
    {
      bgColor: 'rgba(251, 233, 231, 0.7)', // Light pink
      text: 'Great team player',
      content: 'Precious is not only a talented developer but also a great team player. He always goes the extra mile to ensure the team\'s success.',
      authorName: 'Emily Davis',
      authorTitle: 'Project Manager • DevWorks'
    },
    {
      bgColor: 'rgba(232, 245, 233, 0.7)', // Light green
      text: 'Innovative and creative',
      content: 'Apcodesphere brought fresh ideas to the table and helped us innovate our product. His creativity and technical skills are top-notch.',
      authorName: 'David Wilson',
      authorTitle: 'Product Manager • NextGen'
    },
    {
      bgColor: 'rgba(243, 229, 245, 0.7)', // Light purple
      text: 'Reliable and efficient',
      content: 'Precious consistently delivered high-quality work on time. His efficiency and reliability made him a valuable asset to our team.',
      authorName: 'Laura Martinez',
      authorTitle: 'Senior Developer • TechSolutions'
    }
  ];

  // Initialize Slick Slider
  useEffect(() => {
    // Ensure the DOM is fully loaded before initializing the slider
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

    // Initialize the slider
    initializeSlider();

    // Cleanup function to destroy the slider when the component unmounts
    return () => {
      $('.testimonials-slider').slick('unslick');
    };
  }, []);

  return (
    <div className="testimonials-container">
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
