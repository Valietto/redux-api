import React from "react"

const ErrorBoundary = ({ error }) => {
    if (!error) return null
    return (
        <div className="border-red-500 rounded-md border px-2 py-1">
            <h4>{error} </h4>
        </div>
    )
}

export default ErrorBoundary
