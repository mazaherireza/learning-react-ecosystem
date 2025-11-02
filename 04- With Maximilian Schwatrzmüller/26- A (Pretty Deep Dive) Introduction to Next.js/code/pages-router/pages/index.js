import Link from "next/link";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul className={styles.list}>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
