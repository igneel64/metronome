import { useEffect, useMemo, useState } from "react";

import { useMetronome, useSongs } from "../hooks";
import { ascendingOrderNumeric } from "../utils/ascendingOrderNumeric";
import styles from "./BPMSelection.module.scss";
import { Button } from "./Button";
import { Error } from "./Error";
import { Loader } from "./Loader";

const INACTIVE_INDEX = -1;

export function BPMSelection() {
  const [active, setActive] = useState(INACTIVE_INDEX);
  const { setBpm } = useMetronome();
  const { songs, loading, hasError } = useSongs();

  const bpmSet = useMemo(() => uniqueBpmSet(songs), [songs]);

  useEffect(() => setActive(INACTIVE_INDEX), [songs]);

  const handleBPMSelection = (bpm: number, idx: number) => {
    setBpm(bpm);
    setActive(idx);
  };

  if (loading) {
    return <Loader />;
  }

  if (hasError) {
    return <Error />;
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
