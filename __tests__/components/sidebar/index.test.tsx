import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Sidebar from "../../../src/components/sidebar";
import { BiShoppingBag } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

describe("Sidebar", () => {
  let options = [
    {
      label: "",
      name: "1",
      id: 1,
      icon: <CgClose color="white" fontSize={25} />,
    },
    {
      label: "",
      name: "2",
      id: 2,
      icon: <AiFillPlusCircle color="white" fontSize={25} />,
    },
    {
      label: "",
      name: "3",
      id: 3,
      icon: <BiShoppingBag color="white" fontSize={25} />,
    },
    {
      label: "",
      name: "4",
      id: 4,
      icon: <BsCart4 color="white" fontSize={25} />,
    },
  ];

  it("renders sidebar  with connexio theme", () => {
    const { container } = render(<Sidebar variant="connexio" />);
    expect(container).toMatchSnapshot();
  });

  it("renders sidebar with klub theme", () => {
    const { container } = render(<Sidebar variant="klub" options={options} />);
    expect(container).toMatchSnapshot();
  });

  it("should call the openMenu click function", () => {
    const { getByTestId } = render(<Sidebar />);
    const onClickOpenMenu = getByTestId("clickOpenMenu");
    let countClicked = 0;
    fireEvent.click(onClickOpenMenu);
    countClicked++;
    const onClickCloseMenu = getByTestId("clickCloseMenu");
    fireEvent.click(onClickCloseMenu);
    countClicked++;
    expect(countClicked).toEqual(2);
  });

  it("should call the mobile menu click function", () => {
    const { getByTestId } = render(<Sidebar />);
    const onClickMobileMenu = getByTestId("clickMobileMenu");
    let countClicked = 0;
    fireEvent.click(onClickMobileMenu);
    countClicked++;
    fireEvent.click(onClickMobileMenu);
    countClicked++;
    expect(countClicked).toEqual(2);
  });

});
