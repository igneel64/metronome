import React, { useState } from "react";

import mockBpm from "../../config/bpm.json";
import { useMetronome } from "../hooks";
import { SongsContext } from "./SongsContext";

type SongsContextProviderProps = {
  children: React.ReactNode;
};

export const SongsContextProvider = ({
  children,
}: SongsContextProviderProps) => {
  const songState = useSongsState();

  return (
    <SongsContext.Provider value={songState}>{children}</SongsContext.Provider>
  );
};

function useSongsState() {
  const [songs, setSongs] = useState(mockBpm);
  const [loading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { setBpm } = useMetronome();

  const fetchSpotifyRecommendations = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const spotifySongs = await (await fetch("/api/list-bpm")).json();
      setSongs(spotifySongs);
    } catch (err) {
      setHasError(true);
    } finally {
      setBpm(0);
      setIsLoading(false);
    }
  };

  return {
    songs,
    fetchSpotifyRecommendations,
    loading,
    hasError,
  };
}
