import { ProgressBar } from "../progress-bar/ProgressBar";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <header className={styles.header}>
        <h1 className={styles.h1}>Наши рестораны</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <h2 className={styles.h2}>© Лалетин Виталий 2025. Все права защищены.</h2>
      </footer>
    </div>
  );
};