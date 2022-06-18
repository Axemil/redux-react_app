import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    flag: false,
    errorText: ""
}
export const errorHandlerSlice = createSlice({
    name: "errorHandler",
    initialState: {value: initialStateValue},
    reducers: {
        setError: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setError} = errorHandlerSlice.actions

export default errorHandlerSlice.reducer;