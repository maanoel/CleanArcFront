import ParkingLot from "../../entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
    parkingLots = [
        {
            code: "shopping",
            capacity: 5,
            open_hour: 8,
            close_hour: 22,
        }
    ];

    parkedCars = [];

    getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);
        const parkingtLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour)
        parkingtLot.occupiedSpaces = this.parkedCars.length;

        return Promise.resolve(parkingtLot);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({ code, plate, date });
    }
}