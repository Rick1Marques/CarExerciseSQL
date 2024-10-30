import {useEffect, useState} from "react";
import {UserCardDto} from "../models/user/UserCardDto.ts";
import axios from "axios";

export function useFetchUsers() {
    const [users, setUsers] = useState<UserCardDto[]>([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`/api/users`)
                if (response.status === 200) {
                    const usersData: UserCardDto[] = await response.data
                    setUsers(usersData)
                }
                setUsers(users)
            } catch (err) {
                console.error(err)
            }
        }

        fetchUsers()
    }, [])
    return [users]
}