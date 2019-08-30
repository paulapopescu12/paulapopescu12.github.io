import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1 className="collection-title">Popular</h1>
      <Collection sorting="popularity.desc" cardCount={4}></Collection>
      <Link to="Popular">
        <div className="button-position">
          <button className="button">
            <span>View more</span>
          </button>
        </div>
      </Link>
      <h1 className="collection-title">New</h1>
      <Collection sorting="release_date.desc" cardCount={4}></Collection>
      <Link to="New">
        <div className="button-position">
          <button className="button">
            <span>View more</span>
          </button>
        </div>
      </Link>
      <h1 className="collection-title">Top Rated</h1>
      <Collection sorting="vote_count.desc" cardCount={4}></Collection>
      <Link to="TopRated">
        <div className="button-position">
          <button className="button">
            <span>View more</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
