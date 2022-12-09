import React from "react";
import { useEffect, useState } from "react";
import { IconProps } from "..";

const getColorByVariant = {
  connexio: "#ff8a00",
  klub: "#3bc236",
};

export const AvatarIcon = ({
  variant = "connexio",
  width = "25",
  height = "25",
}: IconProps) => {
  const [outsideFill, setOutsideFill] = useState("");
  const [insideFill, setInsideFill] = useState("#FFF");

  const onMouseEnter = () => {
    setOutsideFill("#FFF");
    setInsideFill(getColorByVariant[variant]);
  };

  const onMouseLeave = () => {
    setOutsideFill(getColorByVariant[variant]);
    setInsideFill("#FFF");
  };

  useEffect(() => setOutsideFill(getColorByVariant[variant]), [variant]);

  return (
    <div
      data-testid="avatar-icon"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <ellipse
          cx="25"
          cy="25"
          rx="25"
          ry="25"
          fill={outsideFill}
          className="cursor-pointer"
        />
        <path
          d="M40.0154 37C40.0154 43.5 42.5 42.5 23.975 42.5C8.97504 42.5 10.0154 42.5 10.0154 37C10.0154 28.7157 16.7312 22 25.0154 22C33.2997 22 40.0154 28.7157 40.0154 37Z"
          fill={insideFill}
        />
        <circle cx="25" cy="12" r="7" fill={insideFill} />
      </svg>
    </div>
  );
};
