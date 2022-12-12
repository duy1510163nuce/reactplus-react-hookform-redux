import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function header() {
  return (
    <header className="header">
      <p className="header-home">
        <Link to="/" className="button-home">
          Home
        </Link>
      </p>
      <p className="header-tweets">
        <Link to="/tweet" className="button-home">
          Tweets
        </Link>
      </p>
    </header>
  );
}
