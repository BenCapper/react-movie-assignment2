import React, { useState, useContext } from "react";
import TvListPageTemplate from '../components/templateTvListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavoritesTv';
import SiteHeaderTv from "../components/siteHeaderTv";
import { TvContext } from '../contexts/tvContext';

const TvHomePage = (props) => {
  const context = useContext(TvContext);

  const allTv = context.tv;
  console.log(allTv)

  // Redundant, but necessary to avoid app crashing.
  const favorites = allTv.filter(m => m.favorite)
  localStorage.setItem('favoritesTv', JSON.stringify(favorites))

  return (
    <>
    <SiteHeaderTv/>
    <TvListPageTemplate
      name="Discover TV"
      tv={allTv}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />
      }}
    />
    </>
);
};
export default TvHomePage;