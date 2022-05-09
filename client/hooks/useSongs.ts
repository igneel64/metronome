import { useContext } from "react";

import { SongsContext } from "../contexts/SongsContext";

export const useSongs = () => useContext(SongsContext);
