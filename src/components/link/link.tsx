import React, {ReactNode} from "react";
export type LinkType = {
    icon?: ReactNode,
    text:string,
    href: string
}

export default function Link(props: LinkType){
    const {icon, text, href} = props
    return <a className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" href={href}>
        {icon} {text}
    </a>
}
