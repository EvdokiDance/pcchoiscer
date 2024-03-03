
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    min: '',
    max: '',
    currentMin: '',
    currentMax: '',
}


export const rangeInput = createSlice({
    name: 'rangeInput',
    initialState,
    reducers: {
        changeMin: (state, action) => {
            state.min = action.payload;
        },
        changeMax: (state, action) => {
            state.max = action.payload;
        },
        changeCurrentMin: (state, action) => {
            state.currentMin = action.payload;
        },
        changeCurrentMax: (state, action) => {
          state.currentMax = action.payload;
        }
    } 
})



export const {changeMin, changeMax, changeCurrentMin, changeCurrentMax} = rangeInput.actions;

export default rangeInput.reducer;