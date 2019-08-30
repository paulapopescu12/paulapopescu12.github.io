import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img className="logo-image" src={props.logoImage} alt="" />
        </Link>
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="list-item" key={item.link}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
