import "../styles/globals.scss";

import type { AppProps } from "next/app";

import { Layout } from "../client/components/layout";
import { MetronomeContextProvider } from "../client/contexts/MetronomeContextProvider";

function MetronomeApp({ Component, pageProps }: AppProps) {
  return (
    <MetronomeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MetronomeContextProvider>
  );
}

export default MetronomeApp;
