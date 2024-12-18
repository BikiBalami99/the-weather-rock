import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Today's weather</h1>
      <form action="">
        <input type="text" name="latitude" placeholder="latitude" />
        <input type="text" name="longitude" placeholder="longitude" />
        
      </form>
    </div>
  );
}
