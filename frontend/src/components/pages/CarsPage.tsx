import {carsFakeData} from "../../DataFake/FakeData.ts";
import {Stack} from "@mui/material";
import CarCard from "../CarCard.tsx";


export default function CarsPage() {
    return (
        <Stack>
            {carsFakeData.map((car) => {
                return (
                    <CarCard key={car.id}
                                car={car}
                    />
                )
            })}
        </Stack>
    )
}