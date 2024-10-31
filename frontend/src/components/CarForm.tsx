import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import axios from "axios"
import {NewCarInputsDto} from "../models/car/NewCarInputsDto.ts";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useFetchUsers} from "../hooks/useFetchUsers.ts";

type CarFormProps = {
    edit?: boolean,
    carId?: string,
    ownerId?: string
}

export default function CarForm({edit, carId, ownerId}: CarFormProps) {
    const [open, setOpen] = React.useState(false);
    const [ownerIdInput, setOwnerIdInput] = useState<string>(ownerId || "")
    const [carOldInfos, setCarOldInfos] = useState()

    const {users,loading} = useFetchUsers()

    useEffect(() => {
        async function getCarById() {
            try {
                const response = await axios.get(`/api/cars/${carId}`)
                if (response.status === 200) {
                    const carData = await response.data
                    setCarOldInfos(carData)
                    setOwnerIdInput(carData.ownerId)
                }
            } catch (err) {
                console.error(err)
            }
        }

        if (carId && edit && users.length > 0) {
            getCarById()
        }
    }, [carId, edit, users]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setOwnerIdInput(event.target.value);
    };

    async function handleAddCar(newCarInputs:NewCarInputsDto) {
        try {
            const response = await axios.post(`/api/cars`, newCarInputs)
            if (response.status === 200) {
                console.log("Car added")
                // window.location.reload();
            }
        } catch (err) {
            console.error(err)
        }
    }

    async function handleUpdateCar(newCarInputs:NewCarInputsDto) {
        try {
            const response = await axios.put(`/api/cars/${carId}`, newCarInputs)
            if (response.status === 200) {
                console.log("Car updated")
                // window.location.reload();
            }
        } catch (err) {
            console.error(err)
        }
    }

        if (loading) {
            return <h1>Loading...</h1>;
        }

        return (
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    {edit ? "Edit Car" : "New Car"}
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData).entries());
                            formJson.numberOfPreviousOfOwners = carOldInfos ? carOldInfos.numberOfPreviousOfOwners : "0";
                            formJson.ownerId = ownerIdInput;
                            if (!edit) {
                                handleAddCar(formJson as NewCarInputsDto)
                            } else {
                                handleUpdateCar(formJson as NewCarInputsDto)
                            }
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>{edit ? "Edit Car" : "New Car"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="category"
                            name="category"
                            label="Category"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.category : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="brand"
                            name="brand"
                            label="Brand"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.brand : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="model"
                            name="model"
                            label="Model"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.model : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="year"
                            name="year"
                            label="Year"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.year : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="mileage"
                            name="mileage"
                            label="Mileage"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.mileage : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="transmission"
                            name="transmission"
                            label="Transmission"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.transmission : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="power"
                            name="power"
                            label="Power"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.power : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="fuelType"
                            name="fuelType"
                            label="Fuel Type"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.fuelType : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="price"
                            name="price"
                            label="Price"
                            type="number"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.price : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="imageUrl"
                            name="imageUrl"
                            label="Image URL"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.imageUrl : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.description : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="fuelConsumption"
                            name="fuelConsumption"
                            label="Fuel Consumption"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.fuelConsumption : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="numberOfDoors"
                            name="numberOfDoors"
                            label="Number of Doors"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.numberOfDoors : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="numberOfSeats"
                            name="numberOfSeats"
                            label="Number of Seats"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.numberOfSeats : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="airBags"
                            name="airBags"
                            label="Air Bags"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.airBags : ""}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="color"
                            name="color"
                            label="Color"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={carOldInfos ? carOldInfos.color : ""}
                        />
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel id="owner">Owner</InputLabel>
                                <Select
                                    labelId="owner"
                                    id="owner"
                                    value={ownerIdInput}
                                    label="Owner"
                                    onChange={handleChange}
                                >
                                    {users.map((user) =>
                                        <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                                    )
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">{edit ? "Save" : "Add"}</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
