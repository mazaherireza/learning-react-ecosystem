import Link from "next/link";
import styles from "./news.module.css";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul className={styles.links}>
        <li>
          <Link href="/news/1001">News 1</Link>
        </li>
        <li>
          <Link href="/news/1002">News 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
