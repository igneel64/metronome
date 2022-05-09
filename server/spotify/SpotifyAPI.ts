type SpotifyTokenResponse = {
  access_token: string;
  token_type: "bearer";
  /* In seconds */
  expires_in: number;
};

type EnhancedTokenResponse = SpotifyTokenResponse & { expires_at: number };

class SpotifyAPI {
  constructor(
    private clientId = process.env.SPOTIFY_CLIENT_ID,
    private clientSecret = process.env.SPOTIFY_CLIENT_SECRET,
    private accessToken?: EnhancedTokenResponse
  ) {}

  private hasValidToken(): boolean {
    if (this.accessToken && this.accessToken.expires_at > Date.now()) {
      return true;
    }
    return false;
  }

  private async getToken(): Promise<EnhancedTokenResponse> {
    if (this.accessToken && this.hasValidToken()) {
      return this.accessToken;
    }
    const TOKEN_URL = "https://accounts.spotify.com/api/token";
    const authHeader =
      "Basic " +
      Buffer.from(this.clientId + ":" + this.clientSecret).toString("base64");

    const spotifyToken = (await (
      await fetch(TOKEN_URL, {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: "grant_type=client_credentials",
      })
    ).json()) as SpotifyTokenResponse;

    const enhancedToken = {
      ...spotifyToken,
      expires_at: Date.now() + spotifyToken.expires_in * 1000,
    } as EnhancedTokenResponse;

    this.accessToken = enhancedToken;

    return enhancedToken;
  }

  async getRecommendations() {
    const RECOMMENDATIONS_URL = "https://api.spotify.com/v1/recommendations";
    const { access_token: accessToken } = await this.getToken();
    const authHeader = "Bearer " + accessToken;
    const recommendationOptions = new URLSearchParams({
      seed_genres: "country",
    });

    return await (
      await fetch(RECOMMENDATIONS_URL + "?" + recommendationOptions, {
        headers: {
          Authorization: authHeader,
        },
      })
    ).json();
  }

  async getAudioFeatures(trackIds: string[]) {
    const AUDIO_FEATURES_URL = "https://api.spotify.com/v1/audio-features";
    const { access_token: accessToken } = await this.getToken();
    const authHeader = "Bearer " + accessToken;
    return await (
      await fetch(AUDIO_FEATURES_URL + "?ids=" + trackIds.join(","), {
        headers: {
          Authorization: authHeader,
        },
      })
    ).json();
  }
}

export default new SpotifyAPI();
