import React, { useEffect, useState } from "react";
import axios from "axios";
import {getSingleUser} from '../../state/singleUser'
import {sessionUser} from '../../state/loggedUser'

import {addFav, removeFav, getFav} from '../../state/favorites'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


// import UserLogged from '../components/UserLogged'

export default function Favorites() {

    const user = useSelector(state => state.singleUser.username)
    const loggedUse = useSelector(state => state.loggedUser)
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)
    
    const singleMovie = useSelector((state) => state.singleMovie);
    
    // const handleClick = () => {
      //   dispatch(sessionUser())
      // };
      
          React.useEffect (() => {
            dispatch(sessionUser())
        },[]) 
        
        const movie = {
          userFrom : loggedUse.username,
          movieId: singleMovie.imdbID,
          movieTitle: singleMovie.Title,
          movieImage: singleMovie.Poster,
        };
        
        
        
        // React.useEffect (() => {
          //     dispatch(getSingleUser())
          
          // },[]) 

          //falta hacer los hooks
          
          const addClick = () => {
            dispatch(addFav(movie))
          };
          
          const removeClick = () => {
            dispatch(removeFav(movie))
          };
          
          
          const getUser = () => {
            dispatch(getFav())

      
    };
    
    console.log(loggedUse.username, "logged usar")
  return (
    <>
      <div>
        <h1>Add to Favorites</h1>
        <button onClick={addClick} >Submit</button>
      </div>

      <h1>Favorites:</h1>
      <button onClick={getUser} >Submit</button>
      <div>
        
 { loggedUse.username && favorites.length>0 ? favorites.filter(x => x.userFrom==loggedUse.username).map((p) => 
            
            (<div key={p.movieId}>
                  <Link
                    onClick={() => handleClick(p.movieId)}
                    to={`/movie/:${p.movieId}`}
                  >
                    <h3> {p.movieTitle} </h3>
                    <img src={p.movieImage} width="110" height="130" />
                  </Link>
                </div>)
              
            )
          : null}
          
      </div>

      <div>
        <h1>Remove from Favorites</h1>
        <button onClick={removeClick}>Submit</button>

      </div>
    </>
  );
}
