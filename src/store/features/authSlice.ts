import { authorize } from "@/app/api/authApi";
import { fetchTokens, fetchUser } from "@/app/api/logonApi";
import { StaredUserType } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type SigninFormTypes = {
  email: string;
  password: string;
};
type SignUpFormTypes = {
  email: string;
  password: string;
  username: string;
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password, username }: SignUpFormTypes) => {
    const newUser = await authorize({ email, password, username });
    return newUser;
  }
);

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
  newUser: null | StaredUserType;
  user: null | StaredUserType;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};

const initialState: AuthStateType = {
  newUser: null,
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
      )
      .addCase(
        createUser.fulfilled,
        (state, action: PayloadAction<StaredUserType>) => {
          state.newUser = action.payload;
        }
      );
  },
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
