import React from "react";
import { Link } from "react-router-dom";
import "../../components/HomePage/Header.css";
import Logo from "../../assets/pawed_logo.png";
import ProfileIcon from "@material-ui/icons/AccountCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/ForumRounded";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Link to={"/profile"}>
          <ProfileIcon fontSize="large" className="headerIcon" />
        </Link>
      </IconButton>

      <IconButton>
        <Link to={"/homepage"}>
        <img src={Logo} className="headerlogo" alt="" />
        </Link>
      </IconButton>

      <IconButton>
      <Link to={"/chat"}>
        <ChatIcon fontSize="large" className="headerIcon" />
        </Link>
      </IconButton>
    </div>
  );
}

export default Header;
