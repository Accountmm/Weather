import { configureStore } from "@reduxjs/toolkit";
import { weather } from "./weather";

export const store = configureStore({
    reducer: {
        weather: weather.reducer
    }
})