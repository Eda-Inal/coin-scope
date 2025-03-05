import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TrendCoin {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  market_cap_rank: number;
  price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

interface TrendState {
  trendCoins: TrendCoin[];
  loading: boolean;
  error: string | null;
}

const initialState: TrendState = {
  trendCoins: [],
  loading: false,
  error: null,
};

export const fetchTrendCoins = createAsyncThunk(
  "trend/fetchTrendCoins",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
      const trendCoinIds = response.data.coins.slice(0, 5).map((coin: any) => coin.item.id);

      const marketDataResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: "usd",
            ids: trendCoinIds.join(","),
            order: "market_cap_desc",
            per_page: 5,
            page: 1,
            sparkline: false,
            price_change_percentage: "24h",
          },
        }
      );

      return marketDataResponse.data.map((coin: any) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        thumb: coin.image,
        market_cap_rank: coin.market_cap_rank,
        price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        total_volume: coin.total_volume,
        market_cap: coin.market_cap,
      }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendCoins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.trendCoins = action.payload;
      })
      .addCase(fetchTrendCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default trendSlice.reducer;