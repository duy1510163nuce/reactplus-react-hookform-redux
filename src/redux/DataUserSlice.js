import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetData, getInfoUser } from "../sevice/GetData";

export const getUsers = createAsyncThunk("/users", async () => {
  const infoUser = await GetData();
  return infoUser.items;
});
export const getUser = createAsyncThunk("/detail", async (id) => {
  const res = await getInfoUser(id);
  return res;
});

export const dataUserSlice = createSlice({
  name: "dataUser",
  initialState: {
    listData: [],
    details: {},
  },
  reducers: {
    clearData: (state) => {
      state.details = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, () => {})
      .addCase(getUsers.rejected, () => {})
      .addCase(getUsers.fulfilled, (state, actions) => {
        state.listData = actions?.payload?.map((user) => {
          return {
            ...user,
            key: user.id,
          };
        });
      })
      .addCase(getUser.pending, () => {})
      .addCase(getUser.rejected, () => {})
      .addCase(getUser.fulfilled, (state, actions) => {
        state.details = actions.payload;
      });
  },
});
export const { clearData } = dataUserSlice.actions;
export default dataUserSlice.reducer;
