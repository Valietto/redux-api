import React from "react"

const PhotoCard = ({ title, url }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
                <img src={url} alt={title} />
            </div>
        </div>
    )
}

export default PhotoCard
