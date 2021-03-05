import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from "axios";

// Get movies

// action

export const getMoviesRequest = createAsyncThunk("MOVIES", (input) => {
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}&plot=short`)
    .then(objeto => objeto.data.Search.filter(x => x!==[]))
});

// reducer

export const moviesReducer = createReducer([], {
    [getMoviesRequest.fulfilled]: (state, action) => [state, ...action.payload],
});


