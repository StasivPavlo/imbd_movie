import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  email: string;
  uid: string;
}

const initialState = {
  email: '',
  uid: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logined: (state, action: PayloadAction<InitialState>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    logouted: () => {
      return initialState;
    }
  }
});

export const { logined, logouted } = userSlice.actions
export default userSlice.reducer;
