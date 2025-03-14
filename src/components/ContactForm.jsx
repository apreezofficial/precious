import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-form-container">
      {!submitted ? (
        <motion.form
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          onSubmit={handleSubmit}
          action="https://getform.io/f/YOUR_GETFORM_URL"
          method="POST"
        >
          <h2>🔥 Contact Me 🔥</h2>
          <motion.input
            whileFocus={{ scale: 1.1, borderColor: "#FF6B00" }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.1, borderColor: "#FF6B00" }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.1, borderColor: "#FF6B00" }}
            name="message"
            placeholder="Your Message"
            required
          />
          <motion.button
            whileHover={{
              scale: 1.2,
              rotate: [0, -2, 2, -2, 2, 0],
              boxShadow: "0 0 20px #FF6B00",
            }}
            whileTap={{ scale: 1.3, backgroundColor: "#FF6B00" }}
            type="submit"
          >
            🚀 Send Message 🚀
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="submitted-message"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          ✅ Submitted! ✅
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
