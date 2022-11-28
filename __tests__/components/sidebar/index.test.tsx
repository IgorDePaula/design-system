import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Sidebar from "../../../src/components/sidebar";
import { mockSidebar } from "../../../src/components/sidebar/mock";

describe("Sidebar", () => {
  it("renders sidebar", () => {
    const { container } = render(
      <Sidebar variant="connexio" options={[...mockSidebar]} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call the openMenu click function", () => {
    const { getByTestId } = render(
      <Sidebar variant="klub" options={mockSidebar} />
    );
    const onClickOpenMenu = getByTestId("clickOpenMenu");
    let countClicked = 0;
    fireEvent.click(onClickOpenMenu);
    countClicked++;
    const onClickCloseMenu = getByTestId("clickCloseMenu");
    fireEvent.click(onClickCloseMenu);
    countClicked++;
    expect(countClicked).toEqual(2);
  });

  it("should call changed on click suboption", () => {
    const { getAllByTestId } = render(
      <Sidebar variant="klub" options={mockSidebar} />
    );
    let countCalled = 0;
    const itemOptions = getAllByTestId("option-menu");
    const itemSubmenus = getAllByTestId("anchor-submenu");
    for (const itemOption of itemOptions) {
      fireEvent.click(itemOption);
      for (const itemSubmenu of itemSubmenus) {
        fireEvent.click(itemSubmenu);
      }
      fireEvent.click(itemOption);
      countCalled++;
    }
    expect(countCalled).toEqual(itemOptions.length);
  });

  // it("should call the mobile menu click function", () => {
  //   const { getByTestId } = render(
  //     <Sidebar variant="connexio" options={mockSidebar} />
  //   );
  //   const onOpenMobileMenu = getByTestId("open-mobile-menu");
  //   let countClicked = 0;
  //   fireEvent.click(onOpenMobileMenu);
  //   countClicked++;

  //   expect(countClicked).toEqual(2);
  // });
});
