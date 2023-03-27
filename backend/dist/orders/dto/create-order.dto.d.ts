import { Coords } from 'src/utils';
export declare class CreateOrderDto {
    customerId: string;
    productName: string;
    address: string;
    coords: Coords;
    price: number;
    note: string;
    predictTime: string;
    deliverId: string;
    delivered: boolean;
    deliveryTime: string;
    deliveryCoordinates: Coords;
}
