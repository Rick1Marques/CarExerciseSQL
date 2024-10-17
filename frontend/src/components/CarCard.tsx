import {CarCardDto} from "../models/CarCardDto.ts";
import {Box, Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";


type CarCardProps = {
    car: CarCardDto
}

export default function CarCard({car}: CarCardProps) {
    const navigate = useNavigate()


    const {
        brand,
        model,
        year,
        mileage,
        transmission,
        power,
        fuelType,
        price,
        imageUrl
    } = car;

    function handleClick() {
        navigate(`/cars/${car.id}`)
    }

    return (
        <>
        <Stack direction="row">
            <Box>
                <img src={imageUrl} alt="car" width="300px"/>
            </Box>
            <Stack>
                <p>{brand} {model}</p>
                <p>Year: {year}</p>
                <p>Mileage: {mileage}</p>
                <p>Transmission: {transmission}</p>
                <p>Power: {power} hp</p>
                <p>Fuel type: {fuelType}</p>
                <p>Price: {price} €</p>
            </Stack>
        </Stack>
            <Button onClick={handleClick}>Details</Button>
        </>
    )
}