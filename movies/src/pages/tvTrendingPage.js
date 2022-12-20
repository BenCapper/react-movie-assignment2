import React from "react";
import { getTrendingTv } from "../api/tmdb-api";
import TvListPageTemplate from '../components/templateTvListPage'
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToMustWatchTv';
import { useQuery } from 'react-query';
import SiteHeaderTv from "../components/siteHeaderTv";


const TrendingTvPage = (props) => {

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['trendingTv'],
    queryFn: () => getTrendingTv(),
    keepPreviousData : true
  })


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;
  console.log(tvs)

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = tvs.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <>
    <SiteHeaderTv/>
    <TvListPageTemplate
      name="Trending TV"
      tv={tvs}
      action={(tv) => {
        return <PlaylistAddIcon tv={tv} />
      }}
    />
    </>
);
};
export default TrendingTvPage;