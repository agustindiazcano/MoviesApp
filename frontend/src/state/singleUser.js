import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

// Get users

export const getSingleUser = createAsyncThunk("GET_USER", () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:5000/user",
  }).then((res) =>  res.data);
});

export const getAllUsers = createAsyncThunk("ALL_USERS", () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:5000/users",
  }).then((res) =>  res.data);
});




export const singleUserReducer = createReducer({}, {
  [getSingleUser.fulfilled]: (state, action) => action.payload,
  [getAllUsers.fulfilled]: (state, action) => action.payload,
  /* [getLanding.fulfilled]: (state, action) => action.payload */
});
