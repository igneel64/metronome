import { useMemo, useState } from "react";

import { useMetronome } from "../hooks/useMetronome";
import { useSongs } from "../hooks/useSongs";
import { ascendingOrderNumeric } from "../utils/ascendingOrderNumeric";
import styles from "./BPMSelection.module.scss";
import { Button } from "./Button";
import { Loader } from "./Loader";

export function BPMSelection() {
  const [active, setActive] = useState(-1);
  const { setBpm } = useMetronome();
  const { songs, loading } = useSongs();

  const bpmSet = useMemo(() => uniqueBpmSet(songs), [songs]);

  const handleBPMSelection = (bpm: number, idx: number) => {
    setBpm(bpm);
    setActive(idx);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.bpmSelection} data-test-id="select-bpm">
      {[...bpmSet].map((bpm, idx) => (
        <Button
          key={`${bpm}-${idx}`}
          handleClick={() => handleBPMSelection(bpm, idx)}
          isActive={idx === active}
        >
          {bpm} BPM
        </Button>
      ))}
    </div>
  );
}

function uniqueBpmSet(songs: (string | number)[][]) {
  return new Set(
    songs.map(([_, __, bpm]) => Number(bpm)).sort(ascendingOrderNumeric)
  );
}
