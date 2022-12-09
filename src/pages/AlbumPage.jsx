import React, { useEffect, useMemo } from "react"
import { Link, Navigate, useLoaderData } from "react-router-dom"
import ErrorBoundary from "../components/ErrorBoundary"
import PhotoList from "../components/PhotoList"
import { useDispatch, useSelector } from "react-redux"
import { selectAlbumById, selectAlbumsState } from "../redux/albums/selector"
import { fetchAlbumById, fetchAlbumPhotos } from "../redux/albums/actions"
import Loader from "../components/Loader"
import { selectUsersData } from "../redux/users/selector"
import { fetchUserById } from "../redux/users/actions"

const AlbumPage = () => {
    const dispatch = useDispatch()
    const { id } = useLoaderData()
    const { error: albumsError } = useSelector(selectAlbumsState)
    const users = useSelector(selectUsersData)
    // { title, id, userId }
    const currentAlbum = useSelector(selectAlbumById(+id))
    const currentAlbumAuthor = useMemo(
        () => users.find((u) => u.id === currentAlbum?.userId),
        [currentAlbum?.userId, users]
    )
    const currentPhotos = useMemo(() => currentAlbum?.photos || [], [currentAlbum])

    useEffect(() => {
        dispatch(fetchAlbumById(id))
    }, [dispatch, id])
    useEffect(() => {
        if (!currentAlbum) return
        if (!currentAlbumAuthor) {
            dispatch(fetchUserById(currentAlbum.userId))
        }
        if (!currentPhotos.length) {
            dispatch(fetchAlbumPhotos(id))
        }
    }, [currentAlbum, currentAlbumAuthor, currentPhotos.length, dispatch, id])
    return (
        <div className="flex flex-col gap-2 max-w-5xl mx-auto">
            <ErrorBoundary error={albumsError} />
            {albumsError && <Navigate to="/404" />}
            <h1 className="text-4xl font-bold first-letter:capitalize">{currentAlbum?.title}</h1>
            <p className="text-2xl text-gray-400">
                Created by:{" "}
                <Link
                    to={`/users/${currentAlbumAuthor?.id}`}
                    className="text-blue-800 underline underline-offset-2"
                >
                    {currentAlbumAuthor?.name}
                </Link>
            </p>
            <div className="">
                {!currentPhotos.length && <Loader />}
                <PhotoList photos={currentPhotos} />
            </div>
        </div>
    )
}

export default AlbumPage
export const albumLoader = ({ params: { id } }) => ({ id: +id })
