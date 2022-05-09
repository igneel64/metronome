import { render } from "@testing-library/react";

import { Button } from "../../client/components/Button";
import { noop } from "../../client/utils/noop";

describe("Button", () => {
  it("renders properly", () => {
    const { container } = render(<Button handleClick={noop}>My Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
