import MovieCard from "./MovieCard";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
  const settings = {
    infinite: true,
    slidesToShow: 9, // Adjust the number of visible slides as needed
    slidesToScroll: 3,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
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
