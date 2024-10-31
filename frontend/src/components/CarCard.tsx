import {Box, Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CarCardDto} from "../models/car/CarCardDto.ts";
import axios from "axios";
import CarForm from "./CarForm.tsx";

type CarCardProps = {
    car: CarCardDto
}

export default function CarCard({car}: CarCardProps) {
    const navigate = useNavigate()

    function handleDetails() {
        navigate(`/cars/${car.id}`)
    }

    async function handleDelete() {
        try {
            const response = await axios.delete(`/api/cars/${car.id}`)
            if (response.status === 200) {
                console.log("Car deleted")
                window.location.reload();
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Stack direction="row">
                <Box>
                    <img src={car!.imageUrl} alt="car" width="300px"/>
                </Box>
                <Stack>
                    <p>{car!.brand} {car!.model}</p>
                    <p>Year: {car!.year}</p>
                    <p>Mileage: {car!.mileage}</p>
                    <p>Transmission: {car!.transmission}</p>
                    <p>Power: {car!.power} hp</p>
                    <p>Fuel type: {car!.fuelType}</p>
                    <p>Price: {car!.price} €</p>
                </Stack>
            </Stack>
            <Button onClick={handleDetails}>Details</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <CarForm edit={true} carId={car.id} ownerId={car.ownerId}/>
        </>
    )
}
