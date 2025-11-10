import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<User>) => {
      state.user = actions.payload;
    },
  },
});
const { reducer, actions } = userSlice;

export const { setUser } = actions;
export default reducer;
