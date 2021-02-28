import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const homeClick = () => {
    props.homeClick();
  };

  return (
    <Link to={`/${props.movie.id}`} onClick={homeClick}>
      <div className="card mt-3 image-container" style={{ width: "400px" }}>
        <div className="card-body">
          <span className="card-title title">{props.movie.title}</span>
          <span
            className="card-title title fa fa-star"
            style={{ float: "right", color: "orange" }}
          >
            {props.movie.rate}
          </span>
        </div>
        <img
          className="card-img-top"
          src={props.movie.posterUrl}
          alt="Card image cap"
        ></img>
      </div>
    </Link>
  );
}

export default MovieCard;
