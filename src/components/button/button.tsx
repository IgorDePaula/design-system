import React, { ReactNode } from "react";
import Loading from "../loading";

export type ButtonType = {
  icon?: ReactNode;
  text: string;
  variant?: "connexio" | "klub";
  onclick: () => void;
  href?: string;
  isLoading?: boolean;
};

const Button: React.FunctionComponent<ButtonType> = (props: ButtonType) => {
  const variantBackground =
    props.variant === "connexio"
      ? "bg-connexio-primary-light"
      : "bg-klub-primary";
  const variantFocus =
    props.variant === "connexio"
      ? "focus:ring-connexio-primary-light"
      : "focus:ring-klub-primary";
  const { icon, text, onclick, href, isLoading = false } = props;

  const handleClick = () => {
    !isLoading && onclick();
  };

  return (
    <button
      onClick={handleClick}
      data-testid="button"
      type="submit"
      className={`group relative flex w-full justify-center rounded-md border border-transparent ${
        isLoading ? "cursor-not-allowed" : ""
      } ${variantBackground} py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700  ${variantFocus}  focus:ring-2  `}
    >
      {icon && !isLoading && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
      )}
      {isLoading && <Loading theme={"dark"} />}
      {text}
    </button>
  );
};
export default Button;
