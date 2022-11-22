import { render } from "@testing-library/react";
import React from "react";
import Avatar from "@components/avatar";

describe("Avatar", () => {
  it("renders snapshot", () => {
    const { container } = render(<Avatar variant="connexio" />);
    expect(container).toMatchSnapshot();
  });
  it("renders a avatar", async () => {
    const { findAllByTestId } = render(<Avatar url="#" variant="connexio" />);

    const avatar = await findAllByTestId("avatar");

    expect(avatar[0]).toBeInTheDocument();
  });
});
