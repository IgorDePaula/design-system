import React, { ReactNode } from "react";
export declare type ButtonType = {
    icon?: ReactNode;
    text: string;
    onclick: () => void;
    href?: string;
    isLoading?: boolean;
};
declare const Button: React.FunctionComponent<ButtonType>;
export default Button;
//# sourceMappingURL=button.d.ts.map