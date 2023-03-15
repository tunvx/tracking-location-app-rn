import { Coords } from 'src/utils';
export declare class CreateOrderDto {
    customer: string;
    address: string;
    coords: Coords;
    price: number;
    note?: string;
    delivered?: boolean;
    deliver?: string;
    deliveringTime?: string;
    deliveringCoords?: Coords;
}
