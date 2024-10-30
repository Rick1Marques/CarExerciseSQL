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


export default function NewCarForm() {
    const [open, setOpen] = React.useState(false);
    const [newCarInputs, setNewCarInputs] = useState<NewCarInputsDto>()
    const [ownerIdInput, setOwnerIdInput] = useState<string>("")
    const [users] = useFetchUsers()

    useEffect(() => {
        async function postCars() {
            try {
                const response = await axios.post(`/api/cars`, newCarInputs)
                if (response.status === 200) {
                    console.log("Car added")
                }
            } catch (err) {
                console.error(err)
            }
        }

        if (newCarInputs) {
            postCars()
        }
    }, [newCarInputs]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setOwnerIdInput(event.target.value as string);
    };

    if (!users) {
        return null;
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                New Car
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
                        formJson.numberOfPreviousOfOwners = "0";
                        formJson.ownerId = ownerIdInput;
                        setNewCarInputs(formJson as NewCarInputsDto);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>New Car</DialogTitle>
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
                    <Button type="submit">Add Car</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
