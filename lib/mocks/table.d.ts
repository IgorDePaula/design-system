/// <reference types="react" />
export declare const peoples: {
    id: number;
    name: JSX.Element;
    title: JSX.Element;
    status: JSX.Element;
    role: string;
}[];
export declare const products: {
    id: number;
    name: string;
    price: number;
    role: string;
}[];
export declare const headers: ({
    name: string;
    title?: undefined;
    status?: undefined;
    role?: undefined;
} | {
    title: string;
    name?: undefined;
    status?: undefined;
    role?: undefined;
} | {
    status: string;
    name?: undefined;
    title?: undefined;
    role?: undefined;
} | {
    role: string;
    name?: undefined;
    title?: undefined;
    status?: undefined;
})[];
export declare const headersProduct: ({
    name: string;
    price?: undefined;
    role?: undefined;
} | {
    price: string;
    name?: undefined;
    role?: undefined;
} | {
    role: string;
    name?: undefined;
    price?: undefined;
})[];
export declare const conquerors: {
    id: number;
    name: string;
    specie: string;
    planet: string;
}[];
export declare const headersConquerors: ({
    id: string;
    name?: undefined;
    specie?: undefined;
    planet?: undefined;
} | {
    name: string;
    id?: undefined;
    specie?: undefined;
    planet?: undefined;
} | {
    specie: string;
    id?: undefined;
    name?: undefined;
    planet?: undefined;
} | {
    planet: string;
    id?: undefined;
    name?: undefined;
    specie?: undefined;
})[];
//# sourceMappingURL=table.d.ts.map