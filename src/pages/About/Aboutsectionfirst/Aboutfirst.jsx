import React from 'react'
import styles from './aboutfirst.module.css'
import bgimg from './assetss/bg-01.jpg'
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
    </>
  )
}

export default Aboutfirst