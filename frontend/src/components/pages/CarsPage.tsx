import {carCardsFakeData} from "../../DataFake/FakeDataCar.ts";
import {Stack} from "@mui/material";
import CarCard from "../CarCard.tsx";


export default function CarsPage() {
    return (
        <Stack>
            {carCardsFakeData.map((car) => {
                return (
                    <CarCard key={car.id}
                                car={car}
                    />
                )
            })}
        </Stack>
    )
}