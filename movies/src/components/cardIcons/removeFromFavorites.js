import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../contexts/authContext";
import { deleteUserFavouriteMovies } from "../../api/tmdb-api";

const RemoveFromFavoritesIcon = ({ movie }) => {
  const contextAuth = useContext(AuthContext);

  const handleRemoveFromFavorites = (e) => {
    const user = contextAuth.userName;
    e.preventDefault();
    //context.removeFromFavorites(movie);
    deleteUserFavouriteMovies(user, movie);
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