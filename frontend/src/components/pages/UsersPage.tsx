import UserCard from "../UserCard.tsx";
import {useFetchUsers} from "../../hooks/useFetchUsers.ts";


export default function UsersPage() {
    const {users, loading} = useFetchUsers()

    if (loading) {
        return <div>Loading...</div>
    }

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