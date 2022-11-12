import {ReactNode, useState} from "react";
import React from "react";
export type DataTableType = {
    // @ts-ignore
    id: number,
    [Key in keyof (string)]: string|number
}

export type TableType = {
    headers: object[]
    hiddenHeaders?: string[],
    formatFn?: { [Key: string]: (param: any) => string },
    data: DataTableType[],
    options?: (params: number) => ReactNode | undefined
}

const Table = (props: TableType) => {
    const {headers , hiddenHeaders = [], formatFn , data = [], options} = props
    const [titleHeads] = useState(headers.map(item => Object.values(item)))
    const [keyHeads] = useState(headers.map(item => Object.keys(item)))

    const format = (key: string, value: string) => {
        return formatFn?.hasOwnProperty(key) ? formatFn[key](value) : value
    }

    return      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                        <tr>
                            {titleHeads.map((head , index:number) => {
                                if (!hiddenHeaders.includes(keyHeads[index][0])) {
                                    return <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" key={index}>{head}</th>
                                }
                            })}
                            {options && <th  scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"></th>}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((item, index) => {
                            // @ts-ignore
                            return <tr  data-testid='tr-td' key={index} className={'z-0 hover:bg-gray-100'}><>

                                {keyHeads.map((keyH:any, keyIndex:number) => {
                                    if (!hiddenHeaders.includes(keyH[0])) {
                                        // @ts-ignore
                                        const content = (item[keyH]) as string
                                        return (<td data-testid={`test-${keyH}`} className={'whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'} key={keyIndex}>
                                            {format(keyH, content || '-')}
                                        </td>)
                                    }
                                })}
                                {options && <td>{options(item.id)}</td>}
                            </>
                            </tr>})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}

export default Table;
