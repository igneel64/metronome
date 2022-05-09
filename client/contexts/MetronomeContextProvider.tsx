import React, { useEffect, useState } from "react";

import { setCSSVar } from "../utils/setCSSVar";
import { MetronomeContext } from "./MetronomeContext";

type MetronomeContextProviderProps = {
  children: React.ReactNode;
};

export const MetronomeContextProvider = ({
  children,
}: MetronomeContextProviderProps) => {
  const metronome = useMetronomeState();

  return (
    <MetronomeContext.Provider value={metronome}>
      {children}
    </MetronomeContext.Provider>
  );
};

function useMetronomeState() {
  const [bpm, setBpm] = useState(0);

  useEffect(() => setCSSVar("--seconds-per-beat", `${60 / bpm}s`), [bpm]);

  return {
    bpm,
    setBpm,
  };
}
