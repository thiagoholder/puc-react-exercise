import React from "react";
import styles from "./Header.module.css";

const ContentHeader = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.contentTitle}>Thiago Holder</h2>
      <p className={styles.contentDescription}>
        Profissional de software com 10 anos de experiência, especializado em
        desenvolvimento web, mobile e aplicações empresariais.
      </p>
    </div>
  );
};

export default ContentHeader;
