import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  sun: boolean
  city: string
}
const initialState: IState = {
  sun: false,
  city: "Tashkent"
}
export const weather = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeDay: (state) => {
      state.sun = !state.sun
    },
    changeCity: (state, action) => {
      state.city = action.payload
    }
  }
})

export const { changeDay, changeCity } = weather.actions