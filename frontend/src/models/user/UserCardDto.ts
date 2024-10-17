import {CarInfosUserListCardDto} from "../car/CarInfosUserListCardDto.ts";

export type UserCardDto = {
    id: string,
    username: string,
    profileImageUrl: string
    usersCars: CarInfosUserListCardDto[]
}