import {CarCardDto} from "../models/car/CarCardDto.ts";
import {CarDetailsDto} from "../models/car/CarDetailsDto.ts";


const carCardDto1: CarCardDto = {
    id: "1",
    brand: "Audi",
    model: "A4",
    year: "2016",
    mileage: "100000",
    transmission: "manual",
    power: "150",
    fuelType: "diesel",
    price: "40.000",
    imageUrl: "https://imgr1.auto-motor-und-sport.de/07-2015-Audi-A4-Fahrbericht-react169Big-1b9050a1-883529.jpg"
}

const carCardDto2: CarCardDto = {
    id: "2",
    brand: "BMW",
    model: "X5",
    year: "2018",
    mileage: "50000",
    transmission: "automatic",
    power: "250",
    fuelType: "diesel",
    price: "80.000",
    imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2018/06/bmw-x5-2018-06_14.jpg"
}

const carCardDto3: CarCardDto = {
    id: "3",
    brand: "Mercedes",
    model: "C-Class",
    year: "2019",
    mileage: "20000",
    transmission: "automatic",
    power: "200",
    fuelType: "diesel",
    price: "60.000",
    imageUrl: "https://www.ctvnews.ca/polopoly_fs/1.3852362.1521648107!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
}

export const carCardsFakeData: CarCardDto[] = [
    carCardDto1, carCardDto2, carCardDto3
]



const carDetailsDto1: CarDetailsDto = {
    id: "1",
    category: "sedan",
    brand: "Audi",
    model: "A4",
    year: "2016",
    mileage: "100000",
    transmission: "manual",
    power: "150",
    fuelType: "diesel",
    price: "40.000",
    imageUrl: "https://imgr1.auto-motor-und-sport.de/07-2015-Audi-A4-Fahrbericht-react169Big-1b9050a1-883529.jpg",
    description: "Audi A4 is a compact executive car produced by the German automobile manufacturer Audi since 1994.",
    fuelConsumption: "5.5",
    numberOfDoors: "4",
    numberOfSeats: "5",
    airBags: "6",
    numberOfPreviousOfOwners: "1",
    color: "red",
    owner: {
        username: "user1",
        profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    }
}

const carDetailsDto2: CarDetailsDto = {
    id: "2",
    category: "suv",
    brand: "BMW",
    model: "X5",
    year: "2018",
    mileage: "50000",
    transmission: "automatic",
    power: "250",
    fuelType: "diesel",
    price: "80.000",
    imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2018/06/bmw-x5-2018-06_14.jpg",
    description: "The BMW X5 is a mid-size luxury crossover SUV produced by BMW.",
    fuelConsumption: "7.5",
    numberOfDoors: "5",
    numberOfSeats: "5",
    airBags: "8",
    numberOfPreviousOfOwners: "1",
    color: "white",
    owner: {
        username: "user2",
        profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    }
}

const carDetailsDto3: CarDetailsDto = {
    id: "3",
    category: "sedan",
    brand: "Mercedes",
    model: "C-Class",
    year: "2019",
    mileage: "20000",
    transmission: "automatic",
    power: "200",
    fuelType: "diesel",
    price: "60.000",
    imageUrl: "https://www.ctvnews.ca/polopoly_fs/1.3852362.1521648107!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
    description: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG.",
    fuelConsumption: "6.5",
    numberOfDoors: "4",
    numberOfSeats: "5",
    airBags: "6",
    numberOfPreviousOfOwners: "1",
    color: "black",
    owner: {
        username: "user3",
        profileImageUrl: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    }
}

export const carDetailsFakeData: CarDetailsDto[] = [
    carDetailsDto1, carDetailsDto2, carDetailsDto3
]
