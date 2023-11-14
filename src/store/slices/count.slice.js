import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 0,
        data: []
    },
    reducers: {
        increment: function(state) {
            return {
                ...state,
                value: state.value + 1
            }
        },
        decrement: function(state) {
           state.value--;
        }
    }
})


export const countReducer = countSlice.reducer;
export const countAction = countSlice.actions;