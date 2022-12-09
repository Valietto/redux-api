import React, { useEffect } from "react"
import UserList from "../components/UserList"
import ErrorBoundary from "../components/ErrorBoundary"
import Loader from "../components/Loader"
import { useDispatch, useSelector } from "react-redux"
import { selectUsersState } from "../redux/users/selector"
import { fetchUsers } from "../redux/users/actions"
const UsersPage = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(selectUsersState)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <>
            <ErrorBoundary error={error} />
            {loading && <Loader />}
            <UserList users={users} />
        </>
    )
}

export default UsersPage
