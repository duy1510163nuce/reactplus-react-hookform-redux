import DataUserSlice from "./DataUserSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    dataUser: DataUserSlice,
  },
});

export default store;
