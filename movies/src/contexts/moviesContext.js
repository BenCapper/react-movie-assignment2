import React, { createContext, useEffect, useReducer, useContext, useState } from "react";
import { AuthContext } from '../contexts/authContext';
import { getMovies } from "../api/tmdb-api";
import { newFavouriteMovie } from "../api/tmdb-api";

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
  const [favorites, setFavorites] = useState( [] );
  const [mustWatch, setMustWatch] = useState( [] );
  const [myReviews, setMyReviews] = useState( {} );
  const [state, dispatch] = useReducer(reducer, { movies: []}); 

  useEffect(() => {
    getMovies().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);


  const addFaveMovie = (movie) => {
    const username = context.userName;
    const id = movie.id;
    const title = movie.title;
    const fave = { id: id, title: title};
    console.log(username, fave);
    newFavouriteMovie(username, fave);
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

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

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites,
        mustWatch,
        addFaveMovie,
        removeFromFavorites,
        addReview,
        addToMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;