import React from "react";
import { render } from "@testing-library/react";
import Header from "../../../src/components/header";

describe("header tests", () => {
  it("renders a snapshot", () => {
    const { container } = render(<Header variant="connexio" />);
    expect(container).toMatchSnapshot();
  });

  it("renders header with connexio theme", async () => {
    const { findByTestId, container } = render(<Header variant="connexio" />);
    const header = await findByTestId("user-menu-wrapper-icon");
    expect(header).toBeInTheDocument();
    expect(
      container.getElementsByClassName(
        "text-connexio-primary-light block py-2 px-4 hover:bg-connexio-primary-light hover:text-white rounded-t-lg"
      ).length
    ).toBe(1);
  });
  it("renders header with klub theme", async () => {
    const { findByTestId, container } = render(<Header variant="klub" />);
    const header = await findByTestId("user-menu-wrapper-icon");
    expect(header).toBeInTheDocument();
    expect(
      container.getElementsByClassName(
        "text-klub-primary block py-2 px-4 hover:bg-klub-primary hover:text-white rounded-t-lg"
      ).length
    ).toBe(1);
  });
});
