import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  warning: string | null
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  warning: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.warning = null;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setWarning: (state, action: PayloadAction<string | null>) => {
      state.warning = action.payload;
    },
  },
});

export const { setUser, logOut, setWarning } = userSlice.actions;
export default userSlice.reducer;
