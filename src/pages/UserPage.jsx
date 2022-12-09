import React, { useEffect, useMemo } from "react"
import { Navigate, useLoaderData } from "react-router-dom"
import AlbumList from "../components/AlbumList"
import UserCard from "../components/UserCard"
import ErrorBoundary from "../components/ErrorBoundary"
import Loader from "../components/Loader"
import { selectUsersState } from "../redux/users/selector"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserById } from "../redux/users/actions"
import { fetchUserAlbums } from "../redux/albums/actions"
import { selectAlbumsState } from "../redux/albums/selector"
const UserPage = () => {
    const { id } = useLoaderData()
    const dispatch = useDispatch()
    const { users, error: usersError } = useSelector(selectUsersState)
    const currentUser = useMemo(() => users.find((u) => u.id === +id), [id, users])
    const { albums, loading: albumsLoading, error: albumsError } = useSelector(selectAlbumsState)
    const userAlbums = useMemo(() => albums.filter((a) => a.userId === +id), [albums, id])
    useEffect(() => {
        dispatch(fetchUserById(id))
        dispatch(fetchUserAlbums(id))
    }, [dispatch, id])
    return (
        <div className="flex flex-col gap-6">
            {usersError && <Navigate to={"/404"} />}
            <div className="">
                <ErrorBoundary error={usersError} />
                {currentUser && <UserCard {...currentUser} />}
            </div>
            <div className="">
                <ErrorBoundary error={albumsError} />
                <AlbumList albums={userAlbums} />
                {albumsLoading && <Loader />}
            </div>
        </div>
    )
}

export default UserPage
export const userLoader = ({ params: { id } }) => ({ id: +id })
