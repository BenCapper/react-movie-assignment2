import React, { useContext } from "react";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";
import { newFavouriteTv } from "../../api/tmdb-api";


const AddToFavoritesIcon = ({ tv }) => {
  const contextAuth = useContext(AuthContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    const username = contextAuth.userName;
    const id = tv.id;
    newFavouriteTv(username, id);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;