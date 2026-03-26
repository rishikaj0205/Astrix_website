import React from 'react'
import styles from './aboutfirst.module.css'
import bgimg from './assetss/bg-01.jpg'
import aboutImg from './assetss/about-01.jpg'
const Aboutfirst = () => {
  return (
    <>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <h1>About</h1>
      </section>

      {/* CONTENT */}
      <section className={styles.about}>
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.text}>
            <h2>Our Story</h2>
            <p>Fashion is more than what you wear — it’s how you express who you are.</p>
            <p>
              Our journey began with a simple idea: to create dresses that blend comfort, quality, and timeless style. What started as a small passion for design has grown into a brand that celebrates confidence, individuality, and everyday elegance.
            </p>
            <p>
              We believe every woman deserves to feel beautiful, whether she’s dressing up for a special occasion or choosing something effortless for daily wear. That’s why each piece is thoughtfully designed, using carefully selected fabrics and modern silhouettes that move with you.
            </p>
            <p>
             From casual essentials to statement outfits, our collections are inspired by real people, real moments, and the belief that great fashion should be accessible to everyone.
            </p>
            <p>We don’t just follow trends — we focus on creating styles that last.</p>
            <p>Welcome to our story. Welcome to a style made for you. ✨</p>
          </div>

          {/* RIGHT */}
          <div className={styles.imageBox}>
            <img src={aboutImg} alt="About" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutfirst