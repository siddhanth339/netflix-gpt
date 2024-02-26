import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
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
          src="https://imgs.search.brave.com/6nK-uOj6W_s9T1xozlRuc9WZ66PCrpl5ki0CjfqCAxM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9saUZCQ2ox/LmpwZw"
          alt="profilePic"
        ></img>
        <button
          className="m-2 cursor-pointer font-bold z-50"
          onClick={handleSignOut}
        >
          (Sign out)
        </button>
      </div>
    </>
  );
};

export default Browse;
