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
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <Link className={styles.innerElement + (expandedIndex === index ? ` ${styles.active}` : "")} href={item.link}>
              <div className={styles.ParentFlex}>
                <div className={styles.flexContainer}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div>
                    <Image width={200} height={200} className={styles.mainImg} src={item.img} />
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.collapsedTitle}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalAccordion;