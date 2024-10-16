import {CarCardDto} from "../models/CarCardDto.ts";
import {Box, Stack} from "@mui/material";


type CarCardProps = {
    car: CarCardDto
}

export default function CarCard({car}: CarCardProps) {

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


    return (
        <Stack direction="row">
            <Box>
                <img src={imageUrl} alt="car" width="300px"/>
            </Box>
            <Stack>
                <h2>{brand} {model}</h2>
                <p>Year: {year}</p>
                <p>Mileage: {mileage}</p>
                <p>Transmission: {transmission}</p>
                <p>Power: {power} hp</p>
                <p>Fuel type: {fuelType}</p>
                <p>Price: {price} €</p>
            </Stack>
        </Stack>
    )
}