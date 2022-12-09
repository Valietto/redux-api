const DEFAULT_STATE = {
    loading: false,
    error: null,
    albums: [],
}

export const ALBUMS_ACTIONS = {
    FETCH_START: "ALBUMS/FETCH/START",
    FETCH_SUCCESS: "ALBUMS/FETCH/SUCCESS",
    FETCH_ERROR: "ALBUMS/FETCH/ERROR",
    FETCH_SINGLE: "ALBUMS/FETCH/SINGLE",
    FETCH_PHOTOS: "ALBUMS/FETCH/PHOTOS",
    FETCH_USER_ALBUMS: "ALBUMS/FETCH/USER_ALBUMS",
}

export const albumsReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ALBUMS_ACTIONS.FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case ALBUMS_ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                albums: payload,
            }
        case ALBUMS_ACTIONS.FETCH_PHOTOS:
        case ALBUMS_ACTIONS.FETCH_USER_ALBUMS:
        case ALBUMS_ACTIONS.FETCH_SINGLE:
            return {
                ...state,
                error: null,
                loading: false,
                albums: payload,
            }
        case ALBUMS_ACTIONS.FETCH_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}
