import { fireEvent, render } from "@testing-library/react";
import UserMenu from "@components/user-menu";
import React from "react";

describe("UserMenu", () => {
  it("should render component", () => {
    const { container } = render(<UserMenu variant="connexio" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should open or close on click", () => {
    const { getByTestId } = render(<UserMenu variant = "klub"/>);
    const wrapperIcon = getByTestId("user-menu-wrapper-icon");
    let countClicked = 0;
    fireEvent.click(wrapperIcon);
    countClicked++;
    fireEvent.click(wrapperIcon);
    countClicked++;
    expect(countClicked).toEqual(2);
  });
});
