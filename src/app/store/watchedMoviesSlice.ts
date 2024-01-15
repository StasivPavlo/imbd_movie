import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = string[];

const initialState: InitialState = [];

const watchedMoviesSlice = createSlice({
  name: 'watchedMovie',
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

export const { addMovie, removeMovie } = watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
