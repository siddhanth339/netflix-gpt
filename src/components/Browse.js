import useMovies from "../hooks/useNowPlayingMovies";
import { profilePic } from "../utils/constants";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../utils/GPTSlice";
import GPTSearchComponent from "./GPTSearchComponent";

const Browse = () => {
  useMovies();
  const dispatch = useDispatch();
  const visible = useSelector((store) => store.gptSlice.visible);
  const handleGPTButtonClick = () => {
    dispatch(setVisible());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="absolute right-0 flex z-50">
        <button
          className="text-white font-bold bg-red-600 rounded-lg w-[150px] p-3 m-6"
          onClick={handleGPTButtonClick}
        >
          GPT Search
        </button>
        <img
          className="w-16 h-16 m-3 p-3 rounded-full"
          src={profilePic}
          alt="profilePic"
        ></img>
        <button
          className="text-white m-2 cursor-pointer font-bold"
          onClick={handleSignOut}
        >
          (Sign out)
        </button>
      </div>
      {visible ? (
        <GPTSearchComponent />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
