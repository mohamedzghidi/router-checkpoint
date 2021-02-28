import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function MovieDetails(props) {
  let { indx } = useParams();
  return (
    <div>
      <div style={{ marginLeft: "50px", marginTop: "25px" }}>
        <Link to={`/`}>
          <button className="btn btn-primary" type="button">
            Back
          </button>
        </Link>
      </div>
      <div
        style={{
          margin: "auto",
          width: "500px",
          color: "white",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        <h2>{props.movies[indx].title}</h2>
      </div>
      <div style={{ margin: "auto", width: "500px", color: "white" }}>
        {props.movies[indx].description}
      </div>
      <ReactPlayer
        style={{ margin: "auto", marginTop: "25px" }}
        url={props.movies[indx].trailerUrl}
        width="500px"
        playing
        controls={true}
      />
    </div>
  );
}

export default MovieDetails;
