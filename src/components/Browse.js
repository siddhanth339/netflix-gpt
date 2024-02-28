import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { profilePic } from "../utils/constants";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
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
      <div className="absolute right-0 flex">
        <img
          className="w-16 h-16 m-3 p-3 z-50 rounded-full"
          src={profilePic}
          alt="profilePic"
        ></img>
        <button
          className="text-white m-2 cursor-pointer font-bold z-50"
          onClick={handleSignOut}
        >
          (Sign out)
        </button>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
