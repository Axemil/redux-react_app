import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = false
export const loadingSlice = createSlice({
    name: "loading",
    initialState: {value: initialStateValue},
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer;