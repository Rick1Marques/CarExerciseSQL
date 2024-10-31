import {UserCardDto} from "../models/user/UserCardDto.ts";

type UserCardProps = {
    user: UserCardDto
}

export default function UserCard({user}: UserCardProps) {
    const { username, profileImageUrl, usersCars} = user;

    return (
        <div>
            <h1>{username}</h1>
            <img src={profileImageUrl} alt="profile image" width="100px"/>
            <h2>Users cars</h2>
            {usersCars.map((car) => {
                    return (
                        <div key={car.id}>
                            <p>{car.brand} {car.model} {car.year} {car.fuelType}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}