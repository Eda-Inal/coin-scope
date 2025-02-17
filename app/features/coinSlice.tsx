import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Coin {
    name: string;
    symbol: string;
    price: number;
    change: number;
}

interface CoinState {
    favorites: Coin[]
}

const initialState: CoinState = {
    favorites: [
        { name: "Bitcoin", symbol: "BTC", price: 450, change: 2.5 },
        { name: "Ethereum", symbol: "ETH", price: 32, change: -1.2 },
        { name: "Solana", symbol: "SOL", price: 12, change: 5.3 },
        { name: "Cardano", symbol: "ADA", price: 1.2, change: -0.5 },
        { name: "XRP", symbol: "XRP", price: 0.8, change: 3.1 },
        { name: "Polkadot", symbol: "DOT", price: 5.2, change: -2.4 },
    ],
};

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Coin>) => {
            if (!state.favorites.some((coin) => coin.symbol === action.payload.symbol)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter((coin) => coin.symbol !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = coinSlice.actions;
export default coinSlice.reducer;
