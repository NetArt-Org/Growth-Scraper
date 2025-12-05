import React, { useState, useEffect } from "react";
import styles from "./VerticalAccordion.module.css";

const VerticalAccordion = ({ accordionData }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop screen
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className={styles.main}>
      {Object.keys(accordionData).map((key, index) => {
        const item = accordionData[key];

        return (
          <div
            key={key}
            className={`${styles.column} ${
              expandedIndex === index ? styles.expanded : ""
            }`}

            // 🔥 Hover expansion for desktop
            onMouseEnter={() => {
              if (isDesktop && expandedIndex !== index) {
                setExpandedIndex(index);
              }
            }}

            // 🔥 Click expansion for mobile only
            onClick={() => {
              if (!isDesktop && expandedIndex !== index) {
                setExpandedIndex(index);
              }
            }}
          >
            <div
              className={
                styles.innerElement +
                (expandedIndex === index ? ` ${styles.active}` : "")
              }
            >
              <div className={styles.flexContainer}>
                <div className={styles.flexDiv}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.content}>{item.content}</p>
                </div>

                <div className={styles.imgDiv}>
                  <img
                    className={styles.mainImg}
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
              </div>
            </div>

            <div className={styles.collapsedTitle}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalAccordion;
