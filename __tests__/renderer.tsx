import { render, RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

import { MetronomeContextProvider } from "../client/contexts/MetronomeContextProvider";

interface RenderOptionsWithProviderProps extends RenderOptions {
  providerProps: any;
}

export const withMetronomeRenderer = (
  ui: ReactElement,
  options?: RenderOptionsWithProviderProps
) => {
  return render(
    <MetronomeContextProvider>{ui}</MetronomeContextProvider>,
    options
  );
};
