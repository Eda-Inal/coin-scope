import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarState {
    isMenuOpen: boolean
}

const initialState: NavbarState = {
    isMenuOpen: false,
};

const NavbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setIsMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    },
});

export const { setIsMenuOpen } = NavbarSlice.actions;
export default NavbarSlice.reducer;
