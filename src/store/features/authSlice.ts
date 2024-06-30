import { fetchTokens, fetchUser } from "@/app/api/logonApi";
import { StaredUserType } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type SigninFormTypes = {
  email: string;
  password: string;
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SigninFormTypes) => {
    const user = await fetchUser({ email, password });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SigninFormTypes) => {
    const tokens = await fetchTokens({ email, password });
    return tokens;
  }
);

type AuthStateType = {
  user: null | StaredUserType;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};

const initialState: AuthStateType = {
  user: null,
  tokens: {
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<StaredUserType>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        getTokens.fulfilled,
        (
          state,
          action: PayloadAction<{
            access: string | null;
            refresh: string | null;
          }>
        ) => {
          state.tokens.access = action.payload.access;
          state.tokens.refresh = action.payload.refresh;
        }
      );
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
