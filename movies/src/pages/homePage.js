import React, { useState, useContext } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import SiteHeader from "../components/siteHeader";
import { MoviesContext } from '../contexts/moviesContext';


const HomePage = (props) => {
  const context = useContext(MoviesContext);
 
  const movies = context.movies;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <>
    <SiteHeader/>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    </>
);
};
export default HomePage;