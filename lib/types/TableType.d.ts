import { ReactNode } from "react";
declare type Data = {
    id: number;
};
interface TableType {
    headers: object[];
    hiddenHeaders?: string[];
    formatFn?: {
        [Key: string]: (param: any) => string;
    };
    data: Data[];
    options?: (params: number) => ReactNode | undefined;
}
export default TableType;
//# sourceMappingURL=TableType.d.ts.map