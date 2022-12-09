import React from "react"

const UserCard = ({ name, website, username, phone, email }) => {
    return (
        <div className="max-w-md flex-col flex gap-1">
            <h2 className="font-bold text-4xl">{name}</h2>
            <p className="text-xl">
                <span className="text-slate-600">Username: </span>
                {username}
            </p>
            <p className="text-xl">
                <span className="text-slate-600">EMail: </span>
                <a href={`mailto:${email}`} className="underline underline-offset-4">
                    {email}
                </a>
            </p>
            <p className="text-xl">
                <span className="text-slate-600">Phone: </span>
                {phone}
            </p>
            <p className="text-xl">
                <span className="text-slate-600">Site: </span>
                <a href={`https://${website}`} className="underline underline-offset-4">
                    {website}
                </a>
            </p>
        </div>
    )
}

export default UserCard
