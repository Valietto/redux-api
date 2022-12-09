import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="container px-4 py-1 flex items-center justify-end">
            <nav className="flex gap-8 text-xl">
                <NavLink
                    to="/albums"
                    end
                    className={({ isActive }) =>
                        isActive ? "underline underline-offset-2 text-black" : "text-gray-600"
                    }
                >
                    Albums
                </NavLink>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "underline underline-offset-2 text-black" : "text-gray-600"
                    }
                >
                    Users
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
