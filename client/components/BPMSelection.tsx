import { useState } from "react";

import mockBpm from "../../config/bpm.json";
import { useMetronome } from "../hooks/useMetronome";
import { ascendingOrderNumeric } from "../utils/ascendingOrderNumeric";
import styles from "./BPMSelection.module.scss";
import { Button } from "./Button";

const bpmSet = new Set(
  mockBpm.map(([_, __, bpm]) => Number(bpm)).sort(ascendingOrderNumeric)
);

export function BPMSelection() {
  const [active, setActive] = useState(-1);
  const { setBpm } = useMetronome();

  const handleBPMSelection = (bpm: number, idx: number) => {
    setBpm(bpm);
    setActive(idx);
  };

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
