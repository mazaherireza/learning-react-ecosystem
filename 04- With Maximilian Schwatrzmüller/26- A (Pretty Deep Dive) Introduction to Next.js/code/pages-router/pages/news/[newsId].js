import { useRouter } from "next/router";

const NewsDetailsPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>News Detail {router.query.newsId}</h1>;
};

export default NewsDetailsPage;
