import React from "react";
import styles from "./aboutsecond.module.css";

const Aboutsecond = () => {
  return (
    <div className={styles.aboutPage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>ASTRIX</h1>
        <p>Define Your Presence.</p>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <h2>Our Story</h2>
        <p>
          ASTRIX was born from a vision to redefine modern fashion.
          We believe style is not just about clothing — it’s about attitude,
          confidence, and making a statement without saying a word.
          Every ASTRIX collection is crafted to empower individuals
          who dare to stand out.
        </p>
      </section>

      {/* Mission */}
      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To create premium, trend-forward fashion that blends comfort,
          quality, and individuality. ASTRIX designs are made for those
          who embrace boldness and express themselves unapologetically.
        </p>
      </section>

      {/* Vision */}
      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become a globally recognized fashion brand known for
          innovation, sustainability, and timeless style.
          We aim to inspire confidence in every outfit we create.
        </p>
      </section>

      {/* Why Choose Astrix */}
      <section className={styles.section}>
        <h2>Why ASTRIX?</h2>
        <ul>
          <li>✔ Premium Quality Fabrics</li>
          <li>✔ Modern & Bold Designs</li>
          <li>✔ Attention to Detail</li>
          <li>✔ Affordable Luxury</li>
          <li>✔ Customer-First Experience</li>
        </ul>
      </section>

      {/* Closing Line */}
      <section className={styles.section}>
        <h2>Join The Movement</h2>
        <p>
          ASTRIX is more than a brand — it’s a lifestyle.
          Step into confidence. Step into ASTRIX.
        </p>
      </section>

    </div>
  );
};

export default Aboutsecond;
