import {UserOwnerOverviewDto} from "../user/UserOwnerOverviewDto.ts";

export type CarDetailsDto = {
    id: string,
    category: string,
    brand: string,
    model: string,
    year: string,
    mileage: string,
    transmission: string,
    power: string,
    fuelType: string,
    price: string,
    imageUrl: string,
    description: string,
    fuelConsumption: string,
    numberOfDoors: string,
    numberOfSeats: string,
    airBags: string,
    numberOfPreviousOfOwners: string,
    color: string,
    owner: UserOwnerOverviewDto
}