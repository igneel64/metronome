import { createContext } from "react";

import mockBpm from "../../config/bpm.json";
import { noop } from "../utils/noop";

type SongsContext = {
  songs: (string | number)[][];
  fetchSpotifyRecommendations: () => void;
  loading: boolean;
};

export const songsDefault = {
  songs: mockBpm,
  fetchSpotifyRecommendations: noop,
  loading: false,
};

export const SongsContext = createContext<SongsContext>(songsDefault);
