import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animations
import './testimonials.css'; // Custom CSS for styling

// Testimonial Data (You can replace this with real data)
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Solutions',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'This guy is a genius! He transformed our website into a modern, user-friendly platform. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, Innovate Inc.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'Working with him was a game-changer for our business. His attention to detail and creativity are unmatched.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Founder, Code Masters',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    comment:
      'He delivered beyond our expectations. His technical skills and professionalism are top-notch.',
  },
];

// Testimonial Card Component
const TestimonialCard = ({ name, role, image, comment }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="comment">{comment}</p>
      </div>
    </motion.div>
  );
};

// Testimonials Component
const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What People Say About Me</h2>
      <div className="underline"></div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
