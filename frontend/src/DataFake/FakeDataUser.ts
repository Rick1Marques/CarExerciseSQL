import {UserCardDto} from "../models/user/UserCardDto.ts";
import {CarInfosUserListCardDto} from "../models/car/CarInfosUserListCardDto.ts";

const carInfosUserListCardDto1 : CarInfosUserListCardDto = {
    id: "1",
    brand: "Audi",
    model: "A4",
    year: "2016",
    fuelType: "diesel"
}

const carInfosUserListCardDto2 : CarInfosUserListCardDto = {
    id: "2",
    brand: "BMW",
    model: "X5",
    year: "2018",
    fuelType: "diesel"
}

const carInfosUserListCardDto3 : CarInfosUserListCardDto = {
    id: "3",
    brand: "Mercedes",
    model: "C-Class",
    year: "2019",
    fuelType: "diesel"
}


const userCardDto1: UserCardDto = {
    id: "1",
    username: "user1",
    profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    usersCars: [carInfosUserListCardDto1, carInfosUserListCardDto2]
}

const userCardDto2: UserCardDto = {
    id: "2",
    username: "user2",
    profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    usersCars: [carInfosUserListCardDto3]
}

const userCardDto3: UserCardDto = {
    id: "3",
    username: "user3",
    profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    usersCars: []
}

export const userCardsFakeData: UserCardDto[] = [
    userCardDto1, userCardDto2, userCardDto3
]

