import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  isAuth: boolean;
  user: {
    email: string;
    password: string;
  };
};

const initialState: AuthStateType = {
  isAuth: false,
  user: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = {
        email: action.payload,
        password: action.payload,
      };
    },
  },
});
export const { setAuthState, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
