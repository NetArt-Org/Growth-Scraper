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
            <div className={styles.innerElement + (expandedIndex === index ? ` ${styles.active}` : "")}>
              <div className={styles.ParentFlex}>
                <div className={styles.flexContainer}>
                  <div className="flexDiv">
                    <h3 className="title">{item.title}</h3>
                    <p className="content">{item.content}</p>
                  </div>
                  <div>
                    <img className="mainImg" src={item.img} alt={item.title} />
                    {/* <Image width={200} height={200} className={styles.mainImg} src={item.img} /> */}
                  </div>
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