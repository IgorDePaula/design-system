import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { AvatarIcon } from "@components/icons";

describe("Avatar", () => {
  it("renders snapshot", () => {
    const { container } = render(<AvatarIcon />);
    expect(container).toMatchSnapshot();
  });
  it("renders a avatar icon with events", async () => {
    const { getByTestId } = render(<AvatarIcon variant="klub" />);

    const avatar = getByTestId("avatar-icon");
    fireEvent.mouseEnter(avatar);
    fireEvent.mouseLeave(avatar);
    expect(avatar).toBeInTheDocument();
  });
});
