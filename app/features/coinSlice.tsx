import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface CryptoData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
    sparkline_in_7d?: {
        price: number[];
    };
}

interface CoinState {
    allCoins: CryptoData[];
    selectedCoin: null | CryptoData;
    isModalOpen: boolean;
    favoriteCoins: string[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const fetchCryptoData = createAsyncThunk<CryptoData[]>(
    "coin/fetchCryptoData",
    async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true"
        );
        return response.data;
    }
);

const initialState: CoinState = {
    allCoins: [],
    selectedCoin: null,
    isModalOpen: false,
    favoriteCoins: [],
    status: "idle",
    error: null,
};

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        setSelectedCoin: (state, action: PayloadAction<CryptoData | null>) => {
            state.selectedCoin = action.payload;
            state.isModalOpen = action.payload !== null;
        },
        setFavorites: (state, action: PayloadAction<string[]>) => {
            state.favoriteCoins = Array.from(new Set([...state.favoriteCoins, ...action.payload]));
        },
        addFavoriteCoin: (state, action: PayloadAction<string>) => {
            if (!state.favoriteCoins.includes(action.payload)) {
                state.favoriteCoins.push(action.payload);
            }
        },
        removeFavoriteCoin: (state, action: PayloadAction<string>) => {
            state.favoriteCoins = state.favoriteCoins.filter(coin => coin !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCryptoData.fulfilled, (state, action: PayloadAction<CryptoData[]>) => {
                state.status = "succeeded";
                state.allCoins = action.payload;
            })
            .addCase(fetchCryptoData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Unknown error";
            });
    },
});

export const {
    setSelectedCoin,
    setFavorites,
    addFavoriteCoin,
    removeFavoriteCoin,
} = coinSlice.actions;

export default coinSlice.reducer;
