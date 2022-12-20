import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
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