import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logo } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe the onAuthStateChange callback after this header component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black absolute px-8 py-2 flex justify-between z-50">
      <img className="w-44" src={logo} alt="logo"></img>
    </div>
  );
};

export default Header;
