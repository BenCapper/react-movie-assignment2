import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUserFavouriteMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import SiteHeader from "../components/siteHeader";
import { AuthContext } from "../contexts/authContext";


const FavoriteMoviesPage = () => {
  const context = useContext(AuthContext);

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ['userFave'],
    queryFn: () => getUserFavouriteMovies(context.userName),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data;

  return (
    <>
    <SiteHeader/>
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
    </>
  );
};

export default FavoriteMoviesPage;