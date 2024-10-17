import {UserCardDto} from "../../models/user/UserCardDto.ts";
import {userCardsFakeData} from "../../DataFake/FakeDataUser.ts";
import UserCard from "../UserCard.tsx";

export default function UsersPage() {
    const users: UserCardDto[] = userCardsFakeData;

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