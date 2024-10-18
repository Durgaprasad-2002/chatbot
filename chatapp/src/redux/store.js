import { configureStore } from "@reduxjs/toolkit";
import responsesReducer from "./slices/responses";

const store = configureStore({
  reducer: {
    responsesReducer,
  },
});

export default store;
