export interface Tarifas {
    type: string;
    name: string;
    gb: string;
    minutes: string;
    speed: string;
    lines: number;
    channels: number;
    extras: [string];
    price: number;

}
