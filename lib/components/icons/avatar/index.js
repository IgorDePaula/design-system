import React from "react";
import { useEffect, useState } from "react";
const getColorByVariant = {
    connexio: "#ff8a00",
    klub: "#3bc236",
};
export const AvatarIcon = ({ variant = "connexio", width = "25", height = "25", }) => {
    console.log("avatar-icon");
    console.log(variant);
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
    return (React.createElement("div", { "data-testid": "avatar-icon", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement("svg", { width: width, height: height, viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer" },
            React.createElement("ellipse", { cx: "25", cy: "25", rx: "25", ry: "25", fill: outsideFill, className: "cursor-pointer" }),
            React.createElement("path", { d: "M40.0154 37C40.0154 43.5 42.5 42.5 23.975 42.5C8.97504 42.5 10.0154 42.5 10.0154 37C10.0154 28.7157 16.7312 22 25.0154 22C33.2997 22 40.0154 28.7157 40.0154 37Z", fill: insideFill }),
            React.createElement("circle", { cx: "25", cy: "12", r: "7", fill: insideFill }))));
};
//# sourceMappingURL=index.js.map