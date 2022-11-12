import React from "react";
const Label = (props) => {
    const { id, children } = props;
    return (React.createElement("label", { "data-testid": 'label', htmlFor: id, className: "mb-3 block text-sm font-medium text-gray-700" }, children));
};
export default Label;
//# sourceMappingURL=label.js.map