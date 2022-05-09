import { useMetronome } from "../hooks/useMetronome";
import styles from "./Pulse.module.scss";

export function Pulse() {
  const { bpm } = useMetronome();

  return (
    <div className={styles.pulse}>
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle}>
          <span>{bpm}</span>
        </div>
      </div>
    </div>
  );
}
