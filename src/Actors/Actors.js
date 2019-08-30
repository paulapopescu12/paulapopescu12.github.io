import React from "react";
import "./Actors.css";

function Actors({ cast }) {
  return (
    <div className="actors">
      <ul className="movie-actors">
        {cast &&
          cast.map((item, index) => {
            return (
              <div className="actor-position">
                {item.image ? (
                  <img className="actor-image" src={item.image} alt="" />
                ) : (
                  <img
                    className="actor-image"
                    src="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png"
                    alt=""
                  />
                )}
                <h3 className="actor-name">{item.name}</h3>
                <h3 className="actor-rol">{item.rol}</h3>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Actors;
