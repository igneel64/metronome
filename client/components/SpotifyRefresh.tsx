import { useSongs } from "../hooks";
import SpotifyLogo from "./assets/spotify-logo.svg";
import styles from "./SpotifyRefresh.module.scss";

export function SpotifyRefresh() {
  const { fetchSpotifyRecommendations, loading } = useSongs();

  return (
    <button
      onClick={fetchSpotifyRecommendations}
      className={styles.spotifyButton}
      data-test-id="spotify-refresh"
      disabled={loading}
    >
      Refresh from &nbsp; <SpotifyLogo />
    </button>
  );
}
