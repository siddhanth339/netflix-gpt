import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const firstMovie = movies[0];
  return (
    <div>
      <VideoTitle
        title={firstMovie.original_title}
        overview={firstMovie.overview}
      />
      <VideoBackground id={firstMovie.id} />
    </div>
  );
};

export default MainContainer;
