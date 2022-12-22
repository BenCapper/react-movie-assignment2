import React, { createContext, useEffect, useReducer, useContext, useState } from "react";
import { AuthContext } from '../contexts/authContext';
import { getMovies } from "../api/tmdb-api";
import { newFavouriteMovie, getUserFavouriteMovies, deleteUserFavouriteMovies } from "../api/tmdb-api";


export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const context = useContext(AuthContext);
  const user = context.userName;
  const [favorites, setFavorites] = useState( [] );
  const [mustWatch, setMustWatch] = useState( [] );
  const [myReviews, setMyReviews] = useState( {} );
  const [state, dispatch] = useReducer(reducer, { movies: []}); 

  useEffect(() => {
    getMovies().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
    console.log(newMustWatch)
  };

  const addToFave = async (movie) => {
    const id = movie.id;
    await newFavouriteMovie(user, id);
    const faves = await getUserFavouriteMovies(user);
    console.log(faves);
    setFavorites(faves);
  }

  const delFave = async (movie) => {
    await deleteUserFavouriteMovies(user, movie);
    const faves = await getUserFavouriteMovies(user);
    console.log(faves);
    setFavorites(faves);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites,
        mustWatch,
        addReview,
        addToMustWatch,
        setFavorites,
        addToFave,
        delFave
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;