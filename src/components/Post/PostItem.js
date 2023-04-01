import React from "react";
import styles from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <li className={styles.postItem}>
      <h2 className={styles.postTitle}>{props.title}</h2>
      <p className={styles.postDescription}>{props.description}</p>
    </li>
  );
};

export default PostItem;
