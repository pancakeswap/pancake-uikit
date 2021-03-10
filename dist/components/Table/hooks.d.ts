import { ReactNode } from "react";
import { ColumnType, DataType, UseTableReturnType, UseTableOptionsType } from "./types";
export declare const makeRender: <T extends DataType>(value: any, render: (({ value: val, row }: {
    value: any;
    row: T;
}) => ReactNode) | undefined, row: T) => (() => React.ReactNode);
export declare const useTable: <T extends DataType>(columns: ColumnType<T>[], data: T[], options?: UseTableOptionsType<T> | undefined) => UseTableReturnType<T>;
