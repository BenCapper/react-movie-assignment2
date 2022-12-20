import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToMustWatch';
import { useQuery } from 'react-query';
import SiteHeader from "../components/siteHeader";


const TrendingPage = (props) => {

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendingMovies()
  })


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(movies)

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <>
    <SiteHeader/>
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
    </>
);
};
export default TrendingPage;