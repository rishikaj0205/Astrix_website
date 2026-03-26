import React from "react";
import styles from "./contactone.module.css";

const Contact1 = () => {
  return (
    <div className={styles.contactPage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Contact ASTRIX</h1>
        <p>We’d love to hear from you.</p>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        
        {/* Contact Form */}
        <div className={styles.formContainer}>
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className={styles.infoContainer}>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@astrixfashion.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Chennai, India</p>
          <p>
            Our team is available Monday – Saturday, 10AM – 7PM.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Contact1;
