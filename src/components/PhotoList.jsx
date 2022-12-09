import React from "react"
import PhotoCard from "./PhotoCard"

const PhotoList = ({ photos }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
            {photos.map(({ id, title, url }) => (
                <PhotoCard title={title} url={url} key={id} />
            ))}
        </div>
    )
}

export default PhotoList
