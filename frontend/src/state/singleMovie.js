import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from "axios";


//* Debería poder clickear en la película y eso debería traerme los detalles de ese TÍTULO
//* redireccionarme a otra url o mostrarme los detalles ahí en la misma página.

export const getSingleMovie = createAsyncThunk("SINGLEMOVIE", (id) => {
    console.log(id)
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(objeto => objeto.data)
});

export const singleMovieReducer = createReducer({}, {
    [getSingleMovie.fulfilled]: (state, action) => action.payload
});
