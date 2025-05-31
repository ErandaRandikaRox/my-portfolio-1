import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = encodeURIComponent('Contact Form Submission');
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const emailUrl = `mailto:erandarandika9@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    try {
      window.location.href = emailUrl;
      setStatus({ type: 'success', message: 'Opening email client...' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to open email client. Please email erandarandika9@gmail.com directly.',
      });
    }

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Have a project in mind or want to discuss opportunities? Let's connect!</p>
        </div>

        <div className="contact-content">
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group floating-label">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={formData.name ? 'has-value' : ''}
                aria-label="Your Name"
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group floating-label">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={formData.email ? 'has-value' : ''}
                aria-label="Your Email"
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group floating-label">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className={formData.message ? 'has-value' : ''}
                aria-label="Your Message"
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="icon" /> Send Message
                </>
              )}
            </button>

            {status && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="contact-info">
            <div className="direct-contact">
              <h3>Direct Contact</h3>
              <a href="mailto:erandarandika9@gmail.com" className="email-link">
                erandarandika9@gmail.com
              </a>
            </div>

            <div className="social-links">
              <h3>Find Me On</h3>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eranda-randika-93453b284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/eranda.randika.908884/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/eranda_randika" // Updated placeholder to a likely Twitter/X handle
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;