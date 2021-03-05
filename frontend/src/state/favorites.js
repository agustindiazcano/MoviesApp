import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

// handle favs

export const addFav = createAsyncThunk("ADD_FAV", (movie) => {

    return axios({
      method: "POST",
      data: movie,
      withCredentials: true,
      url: "http://localhost:5000/favorites",
    }).then((res) => console.log(res, "pelicula agregada a favoritos"));
});


export const removeFav = createAsyncThunk("REMOVE_FAV", () => {
    axios({
      method: "DELETE",
      data: movie,
      withCredentials: true,
      url: "http://localhost:5000/favorites",
    }).then((res) => console.log(res, "pelicula eliminada de favoritos"));
});

// Get fav

export const getFav = createAsyncThunk("GET_FAV", () => {

  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:5000/favorites",
  }).then((res) => res.data);
});

  export const favoritesReducer = createReducer({}, {
    [addFav.fulfilled]: (state, action) => action.payload,
    [removeFav.fulfilled]: (state, action) => action.payload,
    [getFav.fulfilled]: (state, action) => action.payload,
    /* [getLanding.fulfilled]: (state, action) => action.payload */
  });
  