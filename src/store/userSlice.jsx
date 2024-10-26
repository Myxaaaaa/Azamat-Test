
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isRegistered: false,
  },
  reducers: {
    registerUser: (state, action) => {
      state.isRegistered = true;
    },
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
