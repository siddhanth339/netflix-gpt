import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  NOWPLAYINGMOVIES_API,
  OPTIONS_FOR_APICALL,
  POPULARMOVIES_API,
  UPCOMINGMOVIES_API,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const useMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    callGetMoviesList();
  }, []);

  const callGetMoviesList = async () => {
    try {
      const movies = await fetch(NOWPLAYINGMOVIES_API, OPTIONS_FOR_APICALL);
      const json = await movies.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results));

      fetch(POPULARMOVIES_API, OPTIONS_FOR_APICALL)
        .then((data) => data.json())
        .then((res) => dispatch(addPopularMovies(res.results)))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }

    const topRatedMovies = await fetch(POPULARMOVIES_API, OPTIONS_FOR_APICALL);
    const topRatedMoviesJSON = await topRatedMovies.json();
    dispatch(addTopRatedMovies(topRatedMoviesJSON.results));

    const upcomingMovies = await fetch(UPCOMINGMOVIES_API, OPTIONS_FOR_APICALL);
    const upcomingMoviesJSON = await upcomingMovies.json();
    dispatch(addUpcomingMovies(upcomingMoviesJSON.results));
  };
};

export default useMovies;
