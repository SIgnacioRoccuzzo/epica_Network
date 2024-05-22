export interface Tarifas {
    type: string;
    name: string;
    gb?: string;
    minutes?: string;
    price: number;
    speed?: string;
    lines?: number;
    channels?: number;
    extras?: string[];
    [key: string]: any;
}
