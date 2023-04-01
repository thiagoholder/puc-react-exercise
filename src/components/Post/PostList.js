import React from "react";
import PostItem from "./PostItem";
import styles from "./PostList.module.css";
import Button from "../UI/Button";

const PostList = (props) => {
  return (
    <div>
      <ul className={styles.postList}>
        {props.posts.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            description={post.description}
          />
        ))}
      </ul>
      <Button text="Ver Tudo" />
    </div>
  );
};

export default PostList;
