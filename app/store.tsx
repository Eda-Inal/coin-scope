import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./features/theme"
import languageReducer from "./features/languageSlice"
import navbarReducer from "./features/navbarSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    navbar: navbarReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch