import React, { useEffect } from "react"
import AlbumList from "../components/AlbumList"
import Loader from "../components/Loader"
import { useDispatch, useSelector } from "react-redux"
import { selectAlbumsState } from "../redux/albums/selector"
import { fetchAlbums } from "../redux/albums/actions"

const AlbumsPage = () => {
    const dispatch = useDispatch()
    const { albums, loading, error } = useSelector(selectAlbumsState)
    useEffect(() => {
        if (!loading && !error && !albums.length) {
            dispatch(fetchAlbums())
        }
    }, [albums.length, dispatch, error, loading])
    return (
        <>
            {error && <h1 className="text-red-500">{error} </h1>}
            {loading && <Loader />}
            <AlbumList albums={albums} />
        </>
    )
}

export default AlbumsPage
