import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
 mode: "light" | "dark";
}

const initialState: themeState = {
  mode:"light"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   toggleTheme: (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
   }
  },
})


export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer