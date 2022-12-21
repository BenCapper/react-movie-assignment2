import React, { createContext, useEffect, useReducer, useContext, useState } from "react";
import { AuthContext } from '../contexts/authContext';
import { getAllTv, newFavouriteTv } from "../api/tmdb-api";

export const TvContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { tv: action.payload.result };
    default:
      return state;
  }
};

const TvContextProvider = (props) => {
  const context = useContext(AuthContext);
  const [favorites, setFavorites] = useState( [] );
  const [mustWatch, setMustWatch] = useState( [] );
  const [myReviews, setMyReviews] = useState( {} );
  const [state, dispatch] = useReducer(reducer, { tv: []}); 

  useEffect(() => {
    getAllTv().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]); 

  const addFaveTv = (tv) => {
    const username = context.userName;
    const id = tv.id;
    const name = tv.name;
    const fave = { id: id, name: name};
    console.log(username, fave);
    newFavouriteTv(username, fave);
  };

  // We will use this function in a later section
  const removeFromFavorites = (tv) => {
    setFavorites( favorites.filter(
      (tvId) => tvId !== tv.id
    ) )
  };

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  const addToMustWatch = (tv) => {
    let newMustWatch = [];
    if (!mustWatch.includes(tv.id)){
      newMustWatch = [...mustWatch, tv.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
    console.log(newMustWatch)
  };

  return (
    <TvContext.Provider
      value={{
        tv: state.tv,
        favorites,
        mustWatch,
        addFaveTv,
        removeFromFavorites,
        addReview,
        addToMustWatch
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;