import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToMustWatch';
import { useQuery } from 'react-query';
import SiteHeader from "../components/siteHeader";


const UpcomingPage = (props) => {

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: () => getUpcomingMovies(),
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
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
    </>
);
};
export default UpcomingPage;