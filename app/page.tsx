import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <header>Header</header>
        <main>Main</main>
      </div>
    </div>
  );
}
