import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );

      if (response.data.body.token) {
        window.localStorage.setItem("user", JSON.stringify(response.data));
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.body.token)
        );
      }

      return response.data;
    } catch (error) {
      console.error(
        `An error has occurred while retrieving user information : ${error}`
      );
      throw error;
    }
  }
);
