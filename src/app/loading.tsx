import styles from "./loading.module.scss";

export default function Loader() {
  return (
    <main className={styles["loader-container"]}>
      <div></div>
    </main>
  );
}
