import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../client/components/layout";
import { MetronomeContextProvider } from "../client/contexts/MetronomeContextProvider";
import { SongsContextProvider } from "../client/contexts/SongsContextProvider";

function MetronomeApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Metronome App</title>
      </Head>
      <MetronomeContextProvider>
        <SongsContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SongsContextProvider>
      </MetronomeContextProvider>
    </>
  );
}

export default MetronomeApp;
