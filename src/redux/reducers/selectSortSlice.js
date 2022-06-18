import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    selectSort: ""
}
export const selectSortSlice = createSlice({
    name: "select",
    initialState: {value: initialStateValue},
    reducers: {
        setSelectSort: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setSelectSort} = selectSortSlice.actions

export default selectSortSlice.reducer;