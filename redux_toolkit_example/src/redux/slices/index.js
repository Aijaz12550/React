import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "test",
    initialState: {
        name: "hello"
    },
    reducers: {
       changeName: (state) => {
           console.log("state reducer",state)
           state.name = "abc"
       } 
    }
})


export const { changeName } = slice.actions;
export default slice.reducer;