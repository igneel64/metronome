import { createContext } from "react";

import { noop } from "../utils/noop";

type MetronomeContext = {
  bpm: number;
  setBpm: (bpm: number) => void;
};

export const metronomeDefaults = {
  bpm: 0,
  setBpm: noop,
};

export const MetronomeContext =
  createContext<MetronomeContext>(metronomeDefaults);
