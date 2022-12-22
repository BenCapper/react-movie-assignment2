import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUserFavouriteTv } from "../../api/tmdb-api";
import { AuthContext } from "../../contexts/authContext";


const RemoveFromFavoritesIcon = ({ tv }) => {
  const contextAuth = useContext(AuthContext);

  const handleRemoveFromFavorites = (e) => {
    const user = contextAuth.userName;
    e.preventDefault();
    deleteUserFavouriteTv(user, tv);
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