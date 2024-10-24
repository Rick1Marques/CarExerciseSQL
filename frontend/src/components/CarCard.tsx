import {Box, Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {CarDetailsDto} from "../models/car/CarDetailsDto.ts";


type CarCardProps = {
    id: string
}

export default function CarCard({id}: CarCardProps) {
    const navigate = useNavigate()

    const [car, setCar] = useState<CarDetailsDto>()

    useEffect(() => {
        async function fetchCar() {
            try {
                const response = await axios.get(`/api/cars/details/${id}`)
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


    function handleClick() {
        navigate(`/cars/${id}`)
    }

    return (
        <>
            {
                car ? <h1>Loading...</h1> :
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
            }
        </>
    )
}
