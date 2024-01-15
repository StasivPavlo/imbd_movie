import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = string[];

const initialState: InitialState = [];

const likedMoviesSlice = createSlice({
  name: 'likedMovies',
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
  }
});

export const { addMovie, removeMovie } = likedMoviesSlice.actions;
export default likedMoviesSlice.reducer;
