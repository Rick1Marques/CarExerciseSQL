import {CarCardDto} from "../models/CarCardDto.ts";

const car1: CarCardDto = {
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

const car2: CarCardDto = {
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

const car3: CarCardDto = {
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

export const carsFakeData: CarCardDto[] = [
    car1, car2, car3
]
