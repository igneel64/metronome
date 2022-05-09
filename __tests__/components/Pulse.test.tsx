import { Pulse } from "../../client/components/Pulse";
import { withMetronomeRenderer } from "../renderer";

describe("Pulse", () => {
  it("renders properly", () => {
    const { container } = withMetronomeRenderer(<Pulse />);
    expect(container).toMatchSnapshot();
  });
});
