import { ReactNode } from "react";
export declare type DataTableType = {
    id: number;
};
export declare type TableType = {
    headers: object[];
    hiddenHeaders?: string[];
    formatFn?: {
        [Key: string]: (param: any) => string;
    };
    data: DataTableType[];
    options?: (params: number) => ReactNode | undefined;
};
declare const Table: (props: TableType) => JSX.Element;
export default Table;
//# sourceMappingURL=table.d.ts.map