import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./features/theme"
import languageReducer from "./features/languageSlice"
import navbarReducer from "./features/navbarSlice"
import authReducer from "./features/authSlice"
import userReducer from "./features/userSlice"
import notificationReducer  from "./features/notifactionSlice"
import coinReducer from "./features/coinSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    navbar: navbarReducer,
    auth: authReducer,
    user: userReducer,
    notification: notificationReducer,
    coin : coinReducer

  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch