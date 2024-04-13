export default class ParkingLot{
    code: string;
    capacity: number;
    openHour: number;
    closeHour: number;
    occupiedSpaces: number;
    
    constructor(code, capacity, openHour, closeHour) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedSpaces = 0;
    }

    isOpen(date)
    {
        const hour = date.getHours();
        return (hour >= this.openHour && hour <= this.closeHour);
    }
}