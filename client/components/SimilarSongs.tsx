import { useMemo } from "react";

import { useMetronome, useSongs } from "../hooks";
import styles from "./SimilarSongs.module.scss";

export function SimilarSongs() {
  const { songs, loading } = useSongs();
  const { bpm } = useMetronome();

  const similarSongs = useMemo(
    () => findSimilarBpmSongs(songs, bpm),
    [songs, bpm]
  );

  if (!bpm || loading) {
    return null;
  }

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

function findSimilarBpmSongs(songs: (string | number)[][], bpm: number) {
  return songs.filter(([_, __, songBpm]) => songBpm === bpm);
}
