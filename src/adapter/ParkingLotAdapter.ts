import ParkingLot from "../entity/ParkingLot";

export default class ParkingLotAdapter{
    static create(code: string, capacity:number, openHour: number, closeHour:number)
    {
        return new ParkingLot(code, capacity, openHour, closeHour);
    }
}