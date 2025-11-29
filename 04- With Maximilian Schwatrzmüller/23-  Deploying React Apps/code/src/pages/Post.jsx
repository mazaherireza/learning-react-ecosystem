import { useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem";

const PostPage = () => {
  const post = useLoaderData();
  return <PostItem post={post} />;
};

export default PostPage;

export const loader = ({ params: { id } }) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
