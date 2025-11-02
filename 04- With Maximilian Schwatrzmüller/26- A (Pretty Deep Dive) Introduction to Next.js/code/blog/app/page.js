import Header from "./components/header";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div className={styles.links}>
        <Link href="/about">About Us</Link>
        <Link href="/post/1001">The First Post</Link>
        <Link href="/post/1002">The Second Post</Link>
      </div>
    </main>
  );
}
