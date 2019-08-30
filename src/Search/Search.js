import React, { Component } from "react";
import { API_key } from "../constants";
import "./Search.css";
import Card from "../Card/Card";
import { timingSafeEqual } from "crypto";

class Search extends Component {
  state = {
    value: "",
    movies: [],
  };
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleClick() {
    {
      this.state.value &&
        Promise.all([
          fetch(
            "https://api.themoviedb.org/3/search/movie?" +
              API_key +
              "&query=" +
              this.state.value
          ).then(value => value.json()),
          fetch(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_key
          ).then(object => object.json()),
        ]).then(object => {
          const movieList = object[0].results;
          const genreList = object[1].genres;
          const newMovies = movieList.map(movie => ({
            title: movie.original_title,
            description: movie.overview,
            src:
              movie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            genres_id: movie.genre_ids,
            genres_name: movie.genre_ids.map(
              genreID => genreList.find(id => id.id === genreID).name
            ),
            id: movie.id,
          }));
          this.setState({
            movies: newMovies,
          });
        });
    }
  }
  render() {
    return (
      <div className="search-page">
        <div className="search">
          <div>
            <input
              className="search-input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="button-position">
            <button
              className="search-button"
              onClick={this.handleClick.bind(this)}>
              <img
                className="button-image"
                src="https://www.stickpng.com/assets/images/585e4ae1cb11b227491c3393.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="collection">
          {this.state.movies.map((movie, i) => {
            return (
              <div key={i}>
                <Card
                  title={movie.title}
                  genres={movie.genres_name}
                  description={movie.description}
                  src={movie.src}
                  to={"/movie/" + movie.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Search;
