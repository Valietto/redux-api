import { getUserById, getUsers } from "../../api/api"
import { USERS_ACTIONS } from "./reducer"
import { mergeExistingWithNew, pushWithPossibleReplace } from "../../utils/array"
export const fetchUsers = () => {
    return async (dispatch, getState) => {
        dispatch({ type: USERS_ACTIONS.FETCH_START })
        const { users: existingUsers } = getState().users
        try {
            const users = await getUsers()
            const newUsers = mergeExistingWithNew(existingUsers, users)
            dispatch({ type: USERS_ACTIONS.FETCH_SUCCESS, payload: newUsers })
        } catch (error) {
            dispatch({
                type: USERS_ACTIONS.FETCH_ERROR,
                payload: "An error with users loading",
            })
        }
    }
}

export const fetchUserById = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: USERS_ACTIONS.FETCH_START })
        try {
            const user = await getUserById(id)
            const { users } = getState().users
            const newUsers = pushWithPossibleReplace(users, user)
            dispatch({
                type: USERS_ACTIONS.FETCH_SINGLE_USER,
                payload: newUsers,
            })
        } catch (error) {
            dispatch({
                type: USERS_ACTIONS.FETCH_ERROR,
                payload: "An error with users loading",
            })
        }
    }
}
