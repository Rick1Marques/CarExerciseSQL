import {Box, Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CarCardDto} from "../models/car/CarCardDto.ts";


type CarCardProps = {
    car: CarCardDto
}

export default function CarCard({car}: CarCardProps) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/cars/${car.id}`)
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
            <Button onClick={handleClick}>Details</Button>
        </>
    )
}
