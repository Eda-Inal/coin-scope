import { createSlice } from '@reduxjs/toolkit'

export interface themeState {
 mode: "light" | "dark";
}
const savedTheme = localStorage.getItem('themeMode') as "light" | "dark" || 'dark';

const initialState: themeState = {
  mode:savedTheme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   toggleTheme: (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
    localStorage.setItem('themeMode', state.mode);
   }
  },
})


export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer