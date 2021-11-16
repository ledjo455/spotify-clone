import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  console.log("header", user);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search..." type="text" />
      </div>
      <div className="header__right">
        <Avatar
          src={user?.images[0]?.url}
          alt="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
