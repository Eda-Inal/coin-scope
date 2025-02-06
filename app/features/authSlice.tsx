import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    method: "google" | "email" | "signup" | "signin"
}

const initialState: AuthState = {
    method: "signin"
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthMethod(state, action: PayloadAction<'google' | 'email' | 'signup' | 'signin'>) {
            state.method = action.payload;
        }
    },
});

export const { setAuthMethod } = authSlice.actions;
export default authSlice.reducer;