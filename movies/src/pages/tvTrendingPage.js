import React, { useState } from "react";
import { getTrendingTv } from "../api/tmdb-api";
import TvListPageTemplate from '../components/templateTvListPage'
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToMustWatchTv';
import { useQuery } from 'react-query';
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import SiteHeaderTv from "../components/siteHeaderTv";


const TrendingTvPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['trendingTv', pageNumber],
    queryFn: () => getTrendingTv(pageNumber),
    keepPreviousData : true
  })

  const handleChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0,0)
  } 
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
    <Stack alignItems="center">
      <Pagination color='primary' count={10} page={pageNumber} onChange={handleChange} />
    </Stack>
    </>
);
};
export default TrendingTvPage;