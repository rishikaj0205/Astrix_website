import { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  { id: 1, name: "Anna Estrada", review: "Lorem ipsum dolor sit amet...", avatar: "https://i.pravatar.cc/100?img=47" },
  { id: 2, name: "Samantha Evans", review: "Lorem ipsum dolor sit amet...", avatar: "https://i.pravatar.cc/100?img=32" },
  { id: 3, name: "Julie Warren", review: "Lorem ipsum dolor sit amet...", avatar: "https://i.pravatar.cc/100?img=45" },
];

export default function Testimonial() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our Clients About Us</h2>

      <div className={styles.carousel}>
        {testimonials.map((t, i) => {
          let position = "next";

          if (i === index) position = "active";
          if (i === index - 1 || (index === 0 && i === testimonials.length - 1))
            position = "prev";

          return (
            <div
              key={t.id}
              className={`${styles.card} ${styles[position]}`}
              onClick={() => setIndex(i)}
            >
              <p>{t.review}</p>
              <h4>{t.name}</h4>
            </div>
          );
        })}
      </div>

      <div className={styles.avatars}>
        {testimonials.map((t, i) => (
          <img
            key={t.id}
            src={t.avatar}
            onClick={() => setIndex(i)}
            className={`${styles.avatar} ${
              i === index ? styles.activeAvatar : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}