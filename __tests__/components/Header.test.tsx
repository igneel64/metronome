import { render, screen } from "@testing-library/react";

import { Header } from "../../client/components/Header";

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);

    const header = screen.getByRole("heading", {
      name: /DIGITAL METRONOME/,
    });

    expect(header).toBeInTheDocument();
  });
});
