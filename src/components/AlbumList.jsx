import React from "react"
import { Link } from "react-router-dom"
const AlbumList = ({ albums }) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold">Albums</h3>
            <div className="flex flex-col gap-2 text-2xl">
                {albums.map((a) => (
                    <div key={a.id} className="flex gap-2 items-center">
                        <div className="">
                            <img src="/album-icon.png" alt="" className="w-6 h-6" />
                        </div>
                        <div className="">
                            <Link to={`/albums/${a.id}`} className="hover:text-blue-800">
                                {a.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlbumList
