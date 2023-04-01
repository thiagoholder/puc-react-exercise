import React from "react";
import styles from "./Title.module.css";

const Title = (props) => {
  return <h1 className={styles.title}>{props.text}</h1>;
};

export default Title;
