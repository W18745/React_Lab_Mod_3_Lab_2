/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-extra-semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        feedback: ''
    });
        const handleChange = (event) => {
            const { name, value} = event.target;
            setFormData({
            ...formData,
            [name]: value
         });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMenssage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
     `;
    const isConfirmed= window.confirm(`Please confirm your details:\n\n${confirmationMenssage}`);
     if (isConfirmed) {
            console.log('Submiting feedback:', formData);
            setFormData({
            name: '',
            email: '',
            feedback: ''
        });
        alert('Thaks you for your valuable feedbaaaack!!!!!');
    }
        
};

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleChange}
            ></textarea>
            <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

