import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/headerReducer";
import partsReducer from "./reducers/partsReducer";
import rangeInputReducer from "./reducers/rangeInputReducer";



const store = configureStore({
    reducer: {
        header: headerReducer,
        partsData: partsReducer,
        rangeInputData: rangeInputReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store