import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
    locale: string;
    language: string
}
const initialState: LanguageState = {
    locale: "en", 
    language: "English",
  };

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
            if (state.locale === "en") state.language = "English"
            else if (state.locale === "tr") state.language = "Türkçe"
            else state.language = "Deutsch"
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
