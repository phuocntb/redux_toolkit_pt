import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./slices/count.slice";

export const store = configureStore({
    reducer: {
        countStore: countReducer,
    }
})

