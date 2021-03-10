export declare const columns: ({
    id: number;
    name: string;
    hidden: boolean;
    label?: undefined;
    render?: undefined;
} | {
    id: number;
    name: string;
    label: string;
    render: ({ value }: {
        value: React.ReactNode;
    }) => React.ReactNode;
    hidden?: undefined;
} | {
    id: number;
    name: string;
    label: string;
    hidden?: undefined;
    render?: undefined;
} | {
    id: number;
    name: string;
    hidden?: undefined;
    label?: undefined;
    render?: undefined;
})[];
export declare const data: never[];
