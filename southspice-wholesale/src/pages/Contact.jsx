const Contact = () => (
  <section className="contact-section">
    <h2 className="section-title">Get in Touch</h2>
    <p className="section-subtext">
      We'd love to hear from you! Whether you have a question about products, pricing, or anything else, our team is ready to help.
    </p>

    <div className="contact-container">
      {/* Left: Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Type your message..." rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      {/* Right: Google Map */}
      <div className="contact-map">
        <iframe
          title="SouthSpice Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.904446870255!2d76.9419131747201!3d11.016844991724166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a6d12f823d%3A0x4c1b8e05f898b0!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div className="contact-details">
      <p>📍 <strong>Address:</strong> No. 45, Spice Market Road, Coimbatore, Tamil Nadu</p>
      <p>📞 <strong>Phone:</strong> +91 9110327705</p>
      <p>📧 <strong>Email:</strong> hello@southspice.in</p>
    </div>
  </section>
);

export default Contact;

