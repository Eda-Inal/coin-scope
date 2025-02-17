import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Coin {
    name: string;
    symbol: string;
    price: number;
    change: number;
    marketVolume: number;
    marketCap: number;
    circulatingSupply: number;
    ath: number;
    atl: number;
    favorite: boolean
}
const generateRandomCoins = (count: number): Coin[] => {
    const coinNames = ["Bitcoin", "Ethereum", "Solana", "Cardano", "XRP", "Polkadot", "Avalanche", "Chainlink", "Litecoin", "Dogecoin", "Shiba Inu", "Matic", "Uniswap", "Aave", "Cosmos"];

    return Array.from({ length: count }, (_, index) => {
        const name = coinNames[index % coinNames.length];
        return {
            name,
            symbol: name.substring(0, 3).toUpperCase(),
            price: +(Math.random() * 50000).toFixed(2),
            change: +(Math.random() * 10 - 5).toFixed(2),
            marketVolume: +(Math.random() * 1_000_000_000).toFixed(0),
            marketCap: +(Math.random() * 500_000_000_000).toFixed(0),
            circulatingSupply: +(Math.random() * 100_000_000).toFixed(0),
            ath: +(Math.random() * 70000).toFixed(2),
            atl: +(Math.random() * 100).toFixed(2),
            favorite: false
        };
    });
};

export interface Coin {
    name: string;
    symbol: string;
    price: number;
    change: number;
}

interface CoinState {
    favorites: Coin[],
    allCoins: Coin[];
}

const initialState: CoinState = {
    favorites: [],
    allCoins: generateRandomCoins(15),
};

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const coinIndex = state.allCoins.findIndex(coin => coin.symbol === action.payload);
            if (coinIndex !== -1) {
                state.allCoins[coinIndex].favorite = !state.allCoins[coinIndex].favorite;

                if (state.allCoins[coinIndex].favorite) {
                    state.favorites.push(state.allCoins[coinIndex]);
                } else {
                    state.favorites = state.favorites.filter(coin => coin.symbol !== action.payload);
                }
            }
        }
    },
});

export const { toggleFavorite } = coinSlice.actions;
export default coinSlice.reducer;
