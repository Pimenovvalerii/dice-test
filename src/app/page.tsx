import styles from "./page.module.css";
import GameLayout from "@/components/GameLayout/GameLayout";

export default function Home() {
  return (
    <main className={styles.main}>
      <GameLayout/>
    </main>
  );
}
