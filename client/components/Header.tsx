import styles from "./Header.module.scss";

export function Header() {
  return (
    <h2 className={styles.header} data-test-id="header">
      DIGITAL METRONOME
    </h2>
  );
}
