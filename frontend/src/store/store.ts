import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/headerReducer";
import partsReducer from "./reducers/partsReducer";
import rangeInputReducer from "./reducers/rangeInputReducer";
import authReducer from "./reducers/authReducer";



const store = configureStore({
    reducer: {
        header: headerReducer,
        partsData: partsReducer,
        rangeInputData: rangeInputReducer,
        auth: authReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store