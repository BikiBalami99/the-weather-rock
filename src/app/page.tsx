import LocationForm from "@/components/LocationForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Today's weather</h1>
      <LocationForm />
    </div>
  );
}
