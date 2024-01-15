import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  value: string;
};

const initialState: SearchState = {
  value: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  }
})

export const { set } = searchSlice.actions;
export default searchSlice.reducer;
