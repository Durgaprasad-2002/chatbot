import { createSlice } from "@reduxjs/toolkit";

const GetData = () => {
  return JSON.parse(localStorage.getItem("Responses")) || [];
};

const responsesSlice = createSlice({
  initialState: GetData,
  name: "responses",
  reducers: {
    addResponse: (state, action) => {
      state.push(action.payload.data);
      localStorage.removeItem("Responses");
      localStorage.setItem("Responses", JSON.stringify(state));
    },
  },
});

export const { addResponse } = responsesSlice.actions;

export default responsesSlice.reducer;
