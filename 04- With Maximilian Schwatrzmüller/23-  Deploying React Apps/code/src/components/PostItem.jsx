import classes from "./PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <article className={classes.item}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};

export default PostItem;
