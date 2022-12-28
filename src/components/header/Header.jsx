import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import AuthContext from "../../store/AuthContext";

const Header = () => {
  const userId = localStorage.getItem("userId") ?? "";
  const authCtx = useContext(AuthContext);

  return (
    <header>
      <h2 className="header-h2-styles">Lore</h2>
      <nav>
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to={`/recipes/${userId}`}>
          <button className="nav-btn">Recipes</button>
        </Link>
        <Link to={`/stories/${userId}`}>
          <button className="nav-btn">Stories</button>
        </Link>
        <Link to={`/advices/${userId}`}>
          <button className="nav-btn">Advice</button>
        </Link>
        <button className="nav-btn" onClick={() => authCtx.logout()}>
          Logout
        </button>
        <BsSearch size="1em" color="#7E8D85" />
      </nav>
    </header>
  );
};

export default Header;
