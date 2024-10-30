import {Stack} from "@mui/material";
import CarCard from "../CarCard.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {CarCardDto} from "../../models/car/CarCardDto.ts";
import NewCarForm from "../NewCarForm.tsx";


export default function CarsPage() {
    const [cars, setCars] = useState<CarCardDto[]>([])

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get(`/api/cars`)
                if (response.status === 200) {
                    const carsData: CarCardDto[] = await response.data
                    setCars(carsData)
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchCars()
    }, []);


    return (
        <Stack>
            <NewCarForm/>
            {cars.length === 0 && <h1>No cars on DB...</h1>}
            {cars.map((car) => {
                return (
                    <CarCard key={car.id} car={car}
                    />
                )
            })}
        </Stack>
    )
}