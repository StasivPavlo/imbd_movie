import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = string[];

const initialState: InitialState = [];

const wishlistMoviesSlice = createSlice({
  name: 'wishlistMovies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      return state.filter(item => item !== action.payload);
    }
  },
});

export const { addMovie, removeMovie } = wishlistMoviesSlice.actions; 
export default wishlistMoviesSlice.reducer;
