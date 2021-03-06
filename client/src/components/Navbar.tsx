import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="nav">
      <ul className="items">
        <li className="item">
          <Link className="item-link" to="/register">
            Login
          </Link>
        </li>
        <li className="item">
          <Link className="item-link" to="/board">
            Board
          </Link>
        </li>
        <li className="item">
          <Link className="item-link" to="/create">
            Create or Join a game
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
