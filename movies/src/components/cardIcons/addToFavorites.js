import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import { newFavouriteMovie, getUserFavouriteMovies } from "../../api/tmdb-api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToFavoritesIcon = ({ movie }) => {
  const contextAuth = useContext(AuthContext);
  const context = useContext(MoviesContext);

  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    context.addToFave(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;