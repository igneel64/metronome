import type { NextApiRequest, NextApiResponse } from "next";

import SpotifyAPI from "../../server/spotify/SpotifyAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recommendations = await SpotifyAPI.getRecommendations();

  const trackIds = recommendations.tracks.reduce(
    (accumulator: Record<string, string[]>, track: any) => {
      accumulator[track.id] = [track.name, track.artists[0].name];
      return accumulator;
    },
    {}
  );

  const { audio_features: audioFeatures } = await SpotifyAPI.getAudioFeatures(
    Object.keys(trackIds)
  );

  const recommendationTempoList = audioFeatures.map((audio: any) => {
    return [...trackIds[audio.id], Math.floor(audio.tempo)];
  });

  res.status(200).json(recommendationTempoList);
}
