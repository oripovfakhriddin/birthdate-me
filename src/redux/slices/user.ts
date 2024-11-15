import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import request from "../../server";
import User from "../../types/user";

interface initialStateTypes {
  users: User[];
  loading: boolean;
  total: number;
}

const initialState: initialStateTypes = {
  users: [],
  loading: false,
  total: 0,
};

interface PayloadTypes {
  users: User[];
  total: number;
}

export const getUsers = createAsyncThunk(
  "users/fetching",
  async ({
    size,
    currentPage,
    search,
  }: {
    size?: string;
    currentPage?: string;
    search?: string;
  }) => {
    const { data } = await request.get("api/user/allUsers", {
      params: {
        size,
        page: currentPage,
        userName: search,
      },
    });
    return data;
  }
);

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    controlLoading(state) {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUsers.fulfilled,
        (state, { payload }: PayloadAction<PayloadTypes>) => {
          state.loading = false;
          state.users = payload?.users;
          state.total = payload?.total;
        }
      )
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

const { reducer: usersReducer, name: userName } = userSlice;

const { controlLoading } = userSlice.actions;

export { usersReducer as default, userName, controlLoading };
