import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://getform.io/f/YOUR_GETFORM_URL", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Submission failed. Try again!");
        }
      } catch (error) {
        alert("An error occurred. Try again!");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form-container">
      {!submitted ? (
        <motion.form
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          onSubmit={handleSubmit}
        >
          <h2>🔥 Contact Me 🔥</h2>
          <div className="input-group">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="input-group">
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="input-group">
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 2, 0],
              boxShadow: "0 0 15px #FF6B00",
            }}
            whileTap={{ scale: 1.2, backgroundColor: "#FF6B00" }}
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
