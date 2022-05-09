import styles from "./Error.module.scss";

export function Error() {
  return (
    <span className={styles.error} data-test-id="error">
      An error has occurred, please try again in a bit!
    </span>
  );
}
