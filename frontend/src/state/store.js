import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { moviesReducer } from './movies'; 
import { singleMovieReducer } from './singleMovie'; 
import { singleUserReducer } from './singleUser'; 
import { favoritesReducer } from './favorites'
import { loggedUserReducer } from './loggedUser'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        movies: moviesReducer,
        singleMovie: singleMovieReducer,
        singleUser: singleUserReducer,
        favorites: favoritesReducer,
        loggedUser: loggedUserReducer,
    },
});

export default store 