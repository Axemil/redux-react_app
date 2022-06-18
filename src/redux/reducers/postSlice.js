import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = []

export const postSlice = createSlice({
    name: "post",
    initialState: {value: initialStateValue},
    reducers: {
        addPost: (state, action) => {
            state.value = [...action.payload, ...state.value]
        },
        deletePost: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload)
        }
    }
})

export const {addPost, deletePost} = postSlice.actions

export default postSlice.reducer;