import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
    locale: string;
    language: string
}
const savedLocale = localStorage.getItem('locale') || 'en';
const initialState: LanguageState = {
    locale: savedLocale,
    language: savedLocale === 'en' ? 'English' : savedLocale === 'tr' ? 'Türkçe' : 'Deutsch',
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
            localStorage.setItem('locale', state.locale);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
