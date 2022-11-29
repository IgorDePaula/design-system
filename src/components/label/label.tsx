import React,{ReactNode} from "react";

export type LabelType = {
    id: string
    children: ReactNode
    className?: string
}

const Label: React.FunctionComponent<LabelType> = (props: LabelType) => {
    const { id, children, className } = props
    return (
        <label
            data-testid='label'
            htmlFor={id}
            className={`"mb-3 block text-sm font-medium text-gray-700 ${className}`}
        >
            {children}
        </label>
    )
}
export default Label
