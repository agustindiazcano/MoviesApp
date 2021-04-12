import React from "react";
import { getMoviesRequest } from "../../state/movies";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie } from "../../state/singleMovie";
import { Link } from "react-router-dom";

import Search from "../containers/Search";

//Automatically render all movies, NEED FORMAT

export default () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(movies);

  const handleClick = (id) => {
    dispatch(getSingleMovie(id));
  };

  

  return (
    <>
      <h1 className="paddingTodo" >Search results:</h1>
      <div>
        {movies ?
           movies.slice(1).map((p) => {
              return (
                <div key={p.imdbID} className="centerCar">
                  <Link
                    onClick={() => handleClick(p.imdbID)}
                    to={`/movie/:${p.imdbID}`}
                  >
                    <h3> {p.Title} </h3>
                    <img src={p.Poster} width="110" height="130" />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
