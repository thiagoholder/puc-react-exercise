import React from "react";
import styles from "./MainContent.module.css";
import Title from "./Title";
import PostList from "../Post/PostList";

const MainContent = (props) => {
  return (
    <main className={styles.mainContent}>
      <Title text="Últimas do Blog" />
      <PostList posts={props.posts} />
    </main>
  );
};

export default MainContent;
