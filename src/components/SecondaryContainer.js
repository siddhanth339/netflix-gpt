import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="pl-11 bg-black">
      <div className="-mt-72 relative">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
        ></MovieList>
      </div>
      <MovieList
        title="Top Rated Movies"
        movies={movies.topRatedMovies}
      ></MovieList>
      <MovieList
        title="Upcoming Movies"
        movies={movies.upcomingMovies}
      ></MovieList>
      <MovieList
        title="Popular Movies"
        movies={movies.popularMovies}
      ></MovieList>
    </div>
  );
};

export default SecondaryContainer;
