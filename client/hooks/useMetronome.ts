import { useContext } from "react";

import { MetronomeContext } from "../contexts/MetronomeContext";

export const useMetronome = () => useContext(MetronomeContext);
