import {ReactNode} from "react";

type ButtonType = {
    icon?: ReactNode,
    text:string,
    onclick: () => void
    href?:string
}

export default ButtonType
