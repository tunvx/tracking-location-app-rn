import { Coords } from 'src/utils';
export declare class UpdateOrderDto {
    note: string;
    predictTime: string;
    deliverId: string;
    delivered: boolean;
    deliveryTime: string;
    deliveryCoordinates: Coords;
}
