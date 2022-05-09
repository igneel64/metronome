import { render } from "@testing-library/react";

import { BPMSelection } from "../../client/components/BPMSelection";

describe("BPMSelection", () => {
  it("renders properly", () => {
    const { container } = render(<BPMSelection />);
    expect(container).toMatchSnapshot();
  });
});
