// REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// AXİOS
import axios from "axios";

export const fetchTextGenerator = createAsyncThunk(
  "textgenerator/getTextGenerator",
  async ({ n, s }) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}?type=all-meat&paras=${n}&format=${s}`
    );
    return res.data;
  }
);
