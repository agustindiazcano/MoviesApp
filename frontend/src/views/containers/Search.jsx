import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie } from "../../state/singleMovie";
import { getMoviesRequest, getLanding } from "../../state/movies";
import { MdSearch} from "react-icons/md";
//Intelligent search component, NEED FORMAT

export default function App() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(getMoviesRequest(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMoviesRequest(input));
  };

  // const handleClick = (id) => {
  //     dispatch(getSingleMovie(id))
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Link to='/search'>
        <input
        
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
        </Link>
        <button className="btn"><MdSearch/> </button>
      </form>
    </>
  );
}
