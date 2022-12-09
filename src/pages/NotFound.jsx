import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="text-3xl text-center flex flex-col gap-3 py-10">
            <h1>This page isn't exist</h1>
            <p>
                Go to{" "}
                <Link to="/" className="underline">
                    Main
                </Link>
            </p>
        </div>
    )
}

export default NotFound
