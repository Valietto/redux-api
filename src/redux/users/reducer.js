const DEFAULT_STATE = {
    loading: false,
    error: null,
    users: [],
}

export const USERS_ACTIONS = {
    FETCH_START: "USERS/FETCH/START",
    FETCH_SUCCESS: "USERS/FETCH/SUCCESS",
    FETCH_ERROR: "USERS/FETCH/ERROR",
    FETCH_SINGLE_USER: "USERS/FETCH/SINGLE",
}

export const usersReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case USERS_ACTIONS.FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case USERS_ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                users: payload,
            }
        case USERS_ACTIONS.FETCH_SINGLE_USER:
            return {
                ...state,
                error: null,
                loading: false,
                users: payload,
            }
        case USERS_ACTIONS.FETCH_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }

        default:
            return state
    }
}
