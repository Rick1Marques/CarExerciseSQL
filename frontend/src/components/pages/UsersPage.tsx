import {UserCardDto} from "../../models/user/UserCardDto.ts";
import {userCardsFakeData} from "../../DataFake/FakeDataUser.ts";
import UserCard from "../UserCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


export default function UsersPage() {
    const [users, setUsers] = useState<UserCardDto[]>([])


    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`/api/users`)
                if (response.status === 200) {
                    const usersData: UserCardDto[] = await response.data
                    setUsers(usersData)
                }
                setUsers(userCardsFakeData)
            } catch (err) {
                console.error(err)
            }
        }

        fetchUsers()
    }, []);




    return (
        <div>
            {users.map((user) => {
                return (
                    <UserCard user={user} key={user.id}/>
                )
            }
            )}
        </div>
    )
}