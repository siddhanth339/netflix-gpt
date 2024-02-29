import { movieImage_CDN } from "../utils/constants";

const MovieCard = ({ imagePath }) => {
  return (
    <>
      <img
        className="ml-2 h-52"
        alt="movieCard"
        src={movieImage_CDN + imagePath}
      ></img>
    </>
  );
};

export default MovieCard;
