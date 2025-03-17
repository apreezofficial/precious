import React, { useState } from "react";
import "./TestButt.css";

const TestButt = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    position: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your GetForm API endpoint
    const GETFORM_API_URL = "YOUR_GETFORM_API_ENDPOINT_HERE";

    try {
      const response = await fetch(GETFORM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your testimony! It has been submitted successfully.");
        setIsPopupOpen(false);
        setFormData({ name: "", organization: "", position: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="testbutt-container">
      <p className="testbutt-text">
        Want to add your testimony about me?{" "}
        <span className="testbutt-link" onClick={() => setIsPopupOpen(true)}>
          click here
        </span>
      </p>

      {isPopupOpen && (
        <div className="testbutt-popup">
          <div className="testbutt-popup-content">
            <h2 className="testbutt-popup-title">Add Your Testimony</h2>
            <form onSubmit={handleSubmit}>
              <div className="testbutt-form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="testbutt-form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>
              <div className="testbutt-form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
              </div>
              <div className="testbutt-form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="testbutt-submit-btn">
                Submit
              </button>
              <button
                type="button"
                className="testbutt-close-btn"
                onClick={() => setIsPopupOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestButt;
