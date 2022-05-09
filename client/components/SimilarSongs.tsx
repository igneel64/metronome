import mockBpm from "../../config/bpm.json";
import { useMetronome } from "../hooks/useMetronome";
import styles from "./SimilarSongs.module.scss";

export function SimilarSongs() {
  const { bpm } = useMetronome();

  const similarSongs = mockBpm.filter(([_, __, songBpm]) => songBpm === bpm);

  return (
    <div className={styles.similarSongs} data-test-id="similar-songs">
      <p className={styles.note}>Songs that use this BPM:</p>
      {similarSongs.map(([song, performer]) => (
        <p className={styles.song} key={song}>
          {song}, ({performer})
        </p>
      ))}
    </div>
  );
}
