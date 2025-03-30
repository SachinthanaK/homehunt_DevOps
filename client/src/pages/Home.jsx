import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to Our Platform</h1>
        <p className={styles.description}>
          Discover amazing features and services designed to make your
          experience seamless.
        </p>
        <div>
          <a href="/sign-up" className={styles.button}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
