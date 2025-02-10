import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    method: "google" | "email" | "signup" | "signin",
    signUpMail : boolean
}

const initialState: AuthState = {
    method: "signin",
    signUpMail: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthMethod(state, action: PayloadAction<'google' | 'email' | 'signup' | 'signin'>) {
            state.method = action.payload;
        },
        setSignUpMail(state, action: PayloadAction<boolean>) {
            state.signUpMail = action.payload; 
          },
          
    },
});

export const { setAuthMethod,setSignUpMail } = authSlice.actions;
export default authSlice.reducer;