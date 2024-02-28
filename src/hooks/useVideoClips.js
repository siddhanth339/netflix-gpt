import { useEffect } from "react";
import { OPTIONS_FOR_APICALL, VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoClips = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    callGetVideos().then((response) => dispatch(addTrailerVideo(response)));
  }, []);

  const callGetVideos = async () => {
    const videos = await fetch(
      VIDEOS_API + id + "/videos",
      OPTIONS_FOR_APICALL
    );

    const json = await videos.json();

    const trailers = json.results.filter((vid) => vid.type === "Trailer");
    return trailers.length === 0 ? json.results[0] : trailers[0];
  };
};

export default useVideoClips;
