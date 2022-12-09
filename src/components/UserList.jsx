import React from "react"
import { Link } from "react-router-dom"
const UserList = ({ users }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Users </h2>
            <ul className="flex flex-col gap-2 list-none text-2xl">
                {users.map((u, i) => (
                    <li key={u.id}>
                        {i + 1}.{" "}
                        <Link to={`/users/${u.id}`} className="hover:text-blue-800">
                            {u.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
