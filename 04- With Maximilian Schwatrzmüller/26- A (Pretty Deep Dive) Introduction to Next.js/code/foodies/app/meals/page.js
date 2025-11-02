import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import styles from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by out vibrant community."
}

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your favourite Recipie</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Loading Meals ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
