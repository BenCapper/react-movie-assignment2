import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../contexts/authContext";
import { deleteUserFavouriteMovies, getUserFavouriteMovies } from "../../api/tmdb-api";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
  const contextAuth = useContext(AuthContext);
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = async (e) => {
    e.preventDefault();
    context.delFave(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;