import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("https://getform.io/f/YOUR_GETFORM_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-wrapper">
      {!submitted ? (
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <h2>💬 Drop a Message 💬</h2>

          <motion.input type="text" name="name" placeholder="Your Name"
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            whileFocus={{ scale: 1.05, borderColor: "#FF6B00", boxShadow: "0px 0px 12px #FF6B00" }}
          />

          <motion.input type="email" name="email" placeholder="Your Email"
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            whileFocus={{ scale: 1.05, borderColor: "#8A2BE2", boxShadow: "0px 0px 12px #8A2BE2" }}
          />

          <motion.textarea name="message" placeholder="Your Message"
            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            whileFocus={{ scale: 1.05, borderColor: "#FF6B00", boxShadow: "0px 0px 12px #FF6B00" }}
          />

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 2, 0],
              boxShadow: "0 0 15px #8A2BE2",
            }}
            whileTap={{ scale: 1.2, backgroundColor: "#8A2BE2" }}
          >
            🚀 Send 🚀
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="submitted-popup"
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
