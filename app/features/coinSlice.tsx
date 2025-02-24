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
}
const coinNames = [
    "Bitcoin", "Ethereum", "Solana", "Cardano", "XRP",
    "Polkadot", "Avalanche", "Chainlink", "Litecoin", "Dogecoin",
    "Shiba Inu", "Matic", "Uniswap", "Aave", "Cosmos"
];
const generateRandomCoins = (count: number): Coin[] => {
    return Array.from({ length: count }, (_, index) => {
        const name = coinNames[index % coinNames.length];
        return {
            name,
            symbol: name.substring(0, 3).toUpperCase(),
            price: 0,  // 🚨 SSR'de sabit değer koy
            change: 0, // 🚨 SSR'de sabit değer koy
            marketVolume: 0,
            marketCap: 0,
            circulatingSupply: 0,
            ath: 0,
            atl: 0,
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
    allCoins: Coin[];
    selectedCoin: null | Coin
    isModalOpen: boolean,
}

const initialState: CoinState = {
    allCoins: generateRandomCoins(15),
    selectedCoin: null,
    isModalOpen: false,
};

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
     
        setRandomPrices: (state) => {
            state.allCoins = state.allCoins.map(coin => ({
                ...coin,
                price: +(Math.random() * 50000).toFixed(2),
                change: +(Math.random() * 10 - 5).toFixed(2),
                marketVolume: +(Math.random() * 1_000_000_000).toFixed(0),
                marketCap: +(Math.random() * 500_000_000_000).toFixed(0),
                circulatingSupply: +(Math.random() * 100_000_000).toFixed(0),
                ath: +(Math.random() * 70000).toFixed(2),
                atl: +(Math.random() * 100).toFixed(2),
            }));
        },
     
        setSelectedCoin: (state, action: PayloadAction<Coin | null>) => {
            state.selectedCoin = action.payload;
            state.isModalOpen = action.payload !== null;
        },
    },
});

export const {  setRandomPrices, setSelectedCoin } = coinSlice.actions;
export default coinSlice.reducer;
