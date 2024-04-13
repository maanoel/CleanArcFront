import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotRepositoryMemory';

it("Should enter parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");

    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T10:00:00"));

    const parkingLotBeforeAfter = await getParkingLot.execute("shopping");

    expect(parkingLotBeforeAfter.occupiedSpaces).toBe(1);
});

test.skip("Should be closed", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");

    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T23:00:00"));
});

test.skip("Should be full", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");

    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T23:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T22:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T21:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T20:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T19:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T18:00:00"));
    await enterParkingLot.execute('shopping', 'MMM-0001', new Date("2024-04-13T18:00:00"));

});
