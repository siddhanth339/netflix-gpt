import MovieCard from "./MovieCard";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 7, // Adjust the number of visible slides as needed
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="text-3xl text-white p-3">{title}</div>
      <div>
        <Slider ref={sliderRef} {...settings}>
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                imagePath={movie.poster_path}
              ></MovieCard>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
