import { applyMiddleware, createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { albumsReducer } from "./albums/reducer"
import { usersReducer } from "./users/reducer"

export const store = createStore(
    combineReducers({
        users: usersReducer,
        albums: albumsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
