import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    headerName: '',
}


export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeaderName: (state, action) => {
            state.headerName = action.payload;
        }
    } 
})



export const {setHeaderName} = headerSlice.actions;

export default headerSlice.reducer;