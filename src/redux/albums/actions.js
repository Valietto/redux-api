import { getAlbumById, getAlbumPhotos, getAlbums, getUserAlbums } from "../../api/api"
import { ALBUMS_ACTIONS } from "./reducer"
import { mergeExistingWithNew, pushWithPossibleReplace } from "../../utils/array"
export const fetchAlbums = () => {
    return async (dispatch, getState) => {
        dispatch({ type: ALBUMS_ACTIONS.FETCH_START })
        const { albums: existingAlbums } = getState().albums
        try {
            const albums = await getAlbums()
            const newAlbums = insertEmptyPhotos(mergeExistingWithNew(existingAlbums, albums))
            dispatch({ type: ALBUMS_ACTIONS.FETCH_SUCCESS, payload: newAlbums })
        } catch (error) {
            dispatch({
                type: ALBUMS_ACTIONS.FETCH_ERROR,
                payload: "An error with albums loading",
            })
        }
    }
}

export const fetchAlbumById = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: ALBUMS_ACTIONS.FETCH_START })
        try {
            const album = await getAlbumById(id)
            const { albums } = getState().albums
            const newAlbums = insertEmptyPhotos(pushWithPossibleReplace(albums, album))
            dispatch({ type: ALBUMS_ACTIONS.FETCH_SINGLE, payload: newAlbums })
        } catch (error) {
            dispatch({
                type: ALBUMS_ACTIONS.FETCH_ERROR,
                payload: "An error with albums loading",
            })
        }
    }
}

export const fetchAlbumPhotos = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: ALBUMS_ACTIONS.FETCH_START })
        try {
            const photos = await getAlbumPhotos(id)
            const { albums } = getState().albums
            const newAlbums = insertPhotos(albums, id, photos)
            dispatch({ type: ALBUMS_ACTIONS.FETCH_PHOTOS, payload: newAlbums })
        } catch (error) {
            dispatch({
                type: ALBUMS_ACTIONS.FETCH_ERROR,
                payload: "An error with albums loading",
            })
        }
    }
}

const insertPhotos = (albums, id, photos) => {
    return albums.map((al) => {
        return al.id !== id ? al : { ...al, photos }
    })
}

const insertEmptyPhotos = (albums) => albums.map((a) => ({ ...a, photos: a.photos || [] }))

export const fetchUserAlbums = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: ALBUMS_ACTIONS.FETCH_START })
        try {
            const albums = await getUserAlbums(id)
            const { albums: existing } = getState().albums
            const newAlbums = mergeExistingWithNew(existing, albums)
            dispatch({ type: ALBUMS_ACTIONS.FETCH_USER_ALBUMS, payload: newAlbums })
        } catch (error) {
            dispatch({
                type: ALBUMS_ACTIONS.FETCH_ERROR,
                payload: "An error with albums loading",
            })
        }
    }
}
