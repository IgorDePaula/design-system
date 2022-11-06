import {ReactNode} from "react";
import MenuType from "@type/MenuType";

type Data = {
    // @ts-ignore
    id: number,
    [Key in keyof (string|number)]: string
}

interface TableType {
    headers: object[]
    hiddenHeaders?: string[],
    formatFn?: { [Key: string]: (param: any) => string },
    data: Data[],
    options?: (params: number) => ReactNode | undefined
}

export default TableType
