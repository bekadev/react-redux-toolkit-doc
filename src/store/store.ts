import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducer/UserSlice'
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatch = AppStoreType['dispatch']