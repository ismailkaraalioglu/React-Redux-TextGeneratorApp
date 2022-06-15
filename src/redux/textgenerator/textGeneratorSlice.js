// REDUX
import { createSlice } from "@reduxjs/toolkit";

// REDUX ASYNCTHUNK
import { fetchTextGenerator } from "./services";

export const textGeneratorSlice = createSlice({
  name: "textgenerator",
  initialState: {
    text: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTextGenerator.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTextGenerator.fulfilled]: (state, action) => {
      state.text = action.payload;
      state.status = "succeeded";
    },
    [fetchTextGenerator.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default textGeneratorSlice.reducer;
