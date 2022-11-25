import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Button from "@components/button";

describe("Button", () => {
  it("renders snapshot", () => {
    const { container } = render(
      <Button text="acessar" onclick={() => jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a button", async () => {
    const { findByTestId } = render(
      <Button text="acessar" onclick={() => jest.fn()} />
    );

    const button = await findByTestId("button");

    expect(button).toBeInTheDocument();
  });

  it("renders a button with icon", async () => {
    const { container } = render(
      <Button
        text="acessar"
        icon={
          <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        }
        onclick={() => jest.fn()}
      />
    );

    const icon = await container.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });
  it("renders a button with loading", async () => {
    const { findByTestId } = render(
      <Button
        isLoading={true}
        text="acessar"
        icon={
          <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        }
        onclick={() => jest.fn()}
      />
    );
    const loading = await findByTestId("loading");

    expect(loading).toBeInTheDocument();
  });
  it("should call the onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
    <Button text="acessar" onclick={onClick} />);

    fireEvent.click(getByTestId("button"));
    expect(onClick).toBeCalled();
  });
});
