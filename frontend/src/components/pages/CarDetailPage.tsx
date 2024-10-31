import {Stack} from "@mui/material";
import {CarDetailsDto} from "../../models/car/CarDetailsDto.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios"

export default function CarDetailPage() {
    const {id} = useParams();

    const [car, setCar] = useState<CarDetailsDto>()

    useEffect(() => {
        async function fetchCar() {
            try {
                const response = await axios.get(`/api/cars/${id}`)
                if (response.status === 200) {
                    const carData: CarDetailsDto = await response.data
                    setCar(carData)
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchCar()
    }, [id]);



    if(!car) {
        return <h1>Loading...</h1>
    }

    return (
        <Stack>
            <h1>{car.brand} {car.model}</h1>
            <Stack direction="row">
                <img src={car.imageUrl} alt="car" width="300px"/>
                <Stack>
                    <p>Price: {car.price} €</p>
                    <p>Owner</p>
                    <Stack direction="row">
                        <p>{car.owner.username}</p>
                        <img src={car.owner.profileImageUrl} alt="car" width="30px" height="30px"/>
                    </Stack>
                </Stack>
            </Stack>
            <p>Category: {car.category}</p>
            <p>Year: {car.year}</p>
            <p>Mileage: {car.mileage} Km</p>
            <p>Transmission: {car.transmission}</p>
            <p>Power: {car.power} hp</p>
            <p>Fuel type: {car.fuelType}</p>
            <p>Description: {car.description}</p>
            <p>Fuel consumption: {car.fuelConsumption}</p>
            <p>Number of doors: {car.numberOfDoors}</p>
            <p>Number of seats: {car.numberOfSeats}</p>
            <p>Air bags: {car.airBags}</p>
            <p>Number of previous owners: {car.numberOfPreviousOfOwners}</p>
            <p>Color: {car.color}</p>
        </Stack>
    )
}
