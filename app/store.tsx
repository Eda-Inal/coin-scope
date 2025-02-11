import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./features/theme"
import languageReducer from "./features/languageSlice"
import navbarReducer from "./features/navbarSlice"
import authReducer from "./features/authSlice"
import userReducer from "./features/userSlice"
import notificationReducer  from "./features/notifactionSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
    notification: notificationReducer

  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch