import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
  value: number
}

const initialState: themeState = {
  value: 0,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   
  },
})


export const { } = themeSlice.actions

export default themeSlice.reducer