import React from "react";
export declare type SwitcherType = {
    label?: string;
    name: string;
    state?: boolean;
    required?: boolean;
    isSubmiting?: boolean;
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
declare const Switcher: React.FunctionComponent<SwitcherType>;
export default Switcher;
//# sourceMappingURL=switcher.d.ts.map