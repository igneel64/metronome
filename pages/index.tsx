import type { NextPage } from "next";

import {
  BPMSelection,
  Header,
  Pulse,
  SimilarSongs,
  SpotifyRefresh,
} from "../client/components";
import { Card } from "../client/components/layout";

const Home: NextPage = () => {
  return (
    <Card>
      <Header />
      <Pulse />
      <BPMSelection />
      <SimilarSongs />
      <SpotifyRefresh />
    </Card>
  );
};

export default Home;
