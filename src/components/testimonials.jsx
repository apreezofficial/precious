import React, { useState } from 'react';
import './Testimonials.css'; // Custom CSS for styling

// Testimonial Data (You can replace this with real data)
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Solutions',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'This guy is a genius! He transformed our website into a modern, user-friendly platform. Highly recommended!',
    country: 'fas fa-flag-usa', // USA flag
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, Innovate Inc.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'Working with him was a game-changer for our business. His attention to detail and creativity are unmatched.',
    country: 'fas fa-flag-canada', // Canada flag
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Founder, Code Masters',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'He delivered beyond our expectations. His technical skills and professionalism are top-notch.',
    country: 'fas fa-flag-uk', // UK flag
  },
  {
    id: 4,
    name: 'Sarah Lee',
    role: 'Product Manager, Bright Ideas',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'His ability to solve complex problems is incredible. We’re so glad we chose him for our project!',
    country: 'fas fa-flag-australia', // Australia flag
  },
];

// Testimonial Slider Component
const testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <h2>What People Say About Me</h2>
      <div className="underline"></div>
      <div className="slider-container">
        <button className="slider-button prev" onClick={prevTestimonial}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === currentIndex ? 'active' : ''
              }`}
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
              }}
            >
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="country-logo">
                  <i className={testimonial.country}></i>
                </div>
              </div>
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <p className="comment">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={nextTestimonial}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default testimonial;
