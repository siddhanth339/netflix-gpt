import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOWPLAYINGMOVIES_API, OPTIONS_FOR_APICALL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
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
    } catch (error) {
      console.log(error);
    }
  };
};

export default useNowPlayingMovies;
