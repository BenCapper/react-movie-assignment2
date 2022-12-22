import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import { newFavouriteMovie } from "../../api/tmdb-api";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const contextAuth = useContext(AuthContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    const username = contextAuth.userName;
    const id = movie.id;
    newFavouriteMovie(username, id);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;