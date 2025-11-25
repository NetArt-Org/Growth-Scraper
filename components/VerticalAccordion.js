import React, { useState } from "react";
import styles from "./VerticalAccordion.module.css";
import Image from 'next/image';
import Link from "next/link";


const VerticalAccordion = ({ accordionData }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className={styles.main}>
      {Object.keys(accordionData).map((key, index) => {
        const item = accordionData[key]; // Accessing the current item
        return (
          <div
            key={key}
            className={`${styles.column} ${expandedIndex === index ? styles.expanded : ""}`}
            onClick={() => {
              if (expandedIndex !== index) {
                setExpandedIndex(index); // Only change when clicking a different item
              }
            }}
          >
            <div className={styles.innerElement + (expandedIndex === index ? ` ${styles.active}` : "")}>
                <div className={styles.flexContainer}>
                  <div className={styles.flexDiv}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.content}>{item.content}</p>
                  </div>
                  <div className={styles.imgDiv}>
                    <img className={styles.mainImg} src={item.img} alt={item.title} />
                    {/* <Image width={200} height={200} className={styles.mainImg} src={item.img} /> */}
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