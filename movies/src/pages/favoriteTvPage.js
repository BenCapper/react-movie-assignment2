import React, { useContext } from "react";
import TvPageTemplate from "../components/templateTvListPage";
import { AuthContext } from "../contexts/authContext";
import { useQuery } from "react-query";
import { getUserFavouriteTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavoriteTv from "../components/cardIcons/removeFromFavoriteTv";
import WriteReviewTv from "../components/cardIcons/writeReviewTv";
import SiteHeaderTv from "../components/siteHeaderTv";


const TvFavoritePage = () => {
  const context = useContext(AuthContext);

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['userFave'],
    queryFn: () => getUserFavouriteTv(context.userName),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const tv = data;


  return (
    <>
    <SiteHeaderTv/>
    <TvPageTemplate
      name="Favorite TV"
      tv={tv}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavoriteTv tv={tv} />
            <WriteReviewTv tv={tv} />
          </>
        );
      }}
    />
    </>
  );
};

export default TvFavoritePage;