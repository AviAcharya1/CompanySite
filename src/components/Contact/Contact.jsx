import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    contactNumber: '',
    regionOfInterest: '',
    typeOfInquiry: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add the functionality to submit the form data to your server or API
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <section className="contact-intro">
        <h2>Contact Us</h2>
        <p>Ready to get started with Inventia, have a question, or need assistance? Let us know how we can help and we’ll be in touch shortly.</p>
      </section>

      <section className="contact-form-section">
        <h2>Get in touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Organization *</label>
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contact Number *</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Region of Interest *</label>
            <input type="text" name="regionOfInterest" value={formData.regionOfInterest} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Type of Inquiry *</label>
            <select name="typeOfInquiry" value={formData.typeOfInquiry} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="Career enquiries">Career enquiries</option>
              <option value="General inquiries">General inquiries</option>
              <option value="Press">Press</option>
              <option value="Adverse events">Adverse events</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit Form</button>
        </form>
        {submitted && <p className="success-message">Thank you! Your message has been submitted.</p>}
      </section>

      <section className="additional-info">
        <h2>Career enquiries</h2>
        <p>careers@inventia.com</p>
        <h2>General inquiries</h2>
        <p>info@inventia.com</p>
        <h2>Press</h2>
        <p>press@inventia.com</p>
        <h2>Adverse events</h2>
        <p>To report an adverse event or product complaint, please reach out to us.</p>
      </section>

      <section className="locations-offices">
        <h2>Locations & Offices</h2>
        <div className="office-info">
          <h3>Registered Office</h3>
          <p>Unit 703-704, 7th Floor, Solaris One Premises Co-operative Society Limited, N.S. Phadke Marg, Andheri (East), Mumbai – 400 069 Maharashtra, India</p>
          <p>Phone: +91 22 6716 3000</p>
        </div>
        <div className="office-info">
          <h3>Corporate Office</h3>
          <p>703/704, Hubtown Solaris, Professor NS Phadke Rd, Andheri (E), Mumbai, Maharashtra – 400069</p>
        </div>
        <div className="office-info">
          <h3>Advanced Pharmaceutical & Technology Center</h3>
        </div>
        <div className="office-info">
          <h3>Manufacturing Facility</h3>
        </div>
        <div className="office-info">
          <h3>Strategic Support Centre</h3>
        </div>
      </section>
    </div>
  );
};

export default Contact;
