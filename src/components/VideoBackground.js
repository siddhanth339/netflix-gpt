import { useSelector } from "react-redux";
import useVideoClips from "../hooks/useVideoClips";

const VideoBackground = ({ id }) => {
  useVideoClips(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return;
  return (
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoBackground;
