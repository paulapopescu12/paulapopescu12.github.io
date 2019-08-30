import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, genres, description, src, index, to }) {
  return (
    <li className="card">
      {src ? (
        <img className="card-image" src={src} alt="" />
      ) : (
        <img
          src="https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg"
          alt=""
        />
      )}
      <div className="card-text">
        <ul className="genre">
          {genres.map((genre, index) => (
            <li key={index} className="genre-type">
              {genre}
            </li>
          ))}
        </ul>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-button-position">
          <Link to={to}>
            <span className="card-button">Read more</span>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Card;
