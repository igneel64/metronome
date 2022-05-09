import type { NextPage } from "next";

import {
  BPMSelection,
  Header,
  Pulse,
  SimilarSongs,
} from "../client/components";
import { Card } from "../client/components/layout";

const Home: NextPage = () => {
  return (
    <Card>
      <Header />
      <Pulse />
      <BPMSelection />
      <SimilarSongs />
    </Card>
  );
};

export default Home;
