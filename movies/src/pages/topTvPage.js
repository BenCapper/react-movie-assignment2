import React from "react";
import { getTopTv } from "../api/tmdb-api";
import TvPageTemplate from '../components/templateTvListPage'
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToMustWatchTv';
import { useQuery } from 'react-query';
import SiteHeaderTv from "../components/siteHeaderTv";


const TvTopPage = (props) => {

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['topTv'],
    queryFn: () => getTopTv()
  })


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tv = data.results;
  console.log(tv)

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = tv.filter(m => m.mustWatch)
  localStorage.setItem('mustWatchTv', JSON.stringify(mustWatch))

  return (
    <>
    <SiteHeaderTv/>
    <TvPageTemplate
      name="Top Rated TV"
      tv={tv}
      action={(tv) => {
        return <PlaylistAddIcon tv={tv} />
      }}
    />
    </>
);
};
export default TvTopPage;