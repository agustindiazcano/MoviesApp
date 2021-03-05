import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sessionUser = createAsyncThunk("SESSION_USER", () => {
    return axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then(res => res.data);
  });


  export const logoutUser =  createAsyncThunk("LOGOUT_USER", () => {
    return axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/logout",
    }).then((res) => console.log(res, "user deslogueado"));
  });


  export const loginUser =  createAsyncThunk("LOGIN_USER", (data) => {
    return axios({
      method: "POST",
      data: {
        username: data.username,
        password: data.password,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res));
  });

  export const loggedUserReducer = createReducer({}, {
    [sessionUser.fulfilled]: (state, action) => action.payload,
    [logoutUser.fulfilled]: (state, action) => action.payload,
    [loginUser.fulfilled]: (state, action) => action.payload,
    /* [getLanding.fulfilled]: (state, action) => action.payload */
  });