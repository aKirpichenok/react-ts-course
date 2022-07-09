import { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <div style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} is living in {user.address.city} city on street {user.address.street} 
        </div>
    )
}

export default UserItem