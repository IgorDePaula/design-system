import React, { ReactNode } from "react";
import Loading from "../loading";

export type ButtonType = {
  icon?: ReactNode;
  text: string;
  onclick: () => void;
  href?: string;
  isLoading?: boolean;
};

const Button: React.FunctionComponent<ButtonType> = (props: ButtonType) => {
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
      } bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
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
