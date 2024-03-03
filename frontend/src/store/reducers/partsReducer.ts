
import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { PartType } from '../../components/Part/Props';

const initialState = {
    parts: [] as PartType[],
    filtredParts: [] as PartType[],
    partsPerPage: [] as PartType[],
}


export const partsSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        setParts: (state, action : PayloadAction<PartType[]>) => {
            state.parts = action.payload;
        },
        setFiltredParts: (state, action : PayloadAction<PartType[]>) => {
            state.filtredParts = action.payload;
        },
        setPartsPerPage: (state, action : PayloadAction<PartType[]>) => {
            state.partsPerPage = action.payload;
        },
    } 
})



export const {setParts, setFiltredParts, setPartsPerPage} = partsSlice.actions;

export default partsSlice.reducer;