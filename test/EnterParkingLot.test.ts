import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotRepositoryMemory';

it("Should enter parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);

    const parkingLot = await enterParkingLot.execute('shopping');

    expect(parkingLot.code).toBe("shopping");
});