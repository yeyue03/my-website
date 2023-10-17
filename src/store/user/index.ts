import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  menu: any
}

const initialState: UserState = {
  menu: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction) => {
      console.log("=== action: ", state, action);
      state.menu = action.payload;
    }
  }
})

export const { setMenu } = userSlice.actions;

export default userSlice.reducer;