import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { backgroundImg } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationResult, setValidationResult] = useState(null);
  const emailValue = useRef(null);
  const passwordValue = useRef(null);
  const nameValue = useRef(null);

  const handleFormSubmit = () => {
    const formValidationResult = validateForm(
      emailValue.current.value,
      passwordValue.current.value,
      nameValue?.current?.value
    );
    setValidationResult(formValidationResult);
    if (formValidationResult) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        emailValue.current.value,
        passwordValue.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationResult(errorCode + ": " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailValue.current.value,
        passwordValue.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationResult(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <img className="absolute" src={backgroundImg} alt="backgroundImg"></img>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap absolute bg-black bg-opacity-80 mx-auto left-0 right-0 my-36 w-3/12 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 ml-3">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm ? (
          <>
            <input
              ref={nameValue}
              className="w-full p-3 mx-2 bg-gray-700 rounded-sm "
              type="text"
              placeholder="Full name"
            ></input>
            <br></br>
          </>
        ) : (
          ""
        )}
        <input
          ref={emailValue}
          className="w-full p-3 mx-2 bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email address"
        ></input>
        <br></br>
        <input
          ref={passwordValue}
          className="w-full p-3 mx-2 bg-gray-700 rounded-sm"
          type="password"
          placeholder="Password"
        ></input>
        <br></br>
        {validationResult !== null && (
          <p className="text-red-600 m-2 p-2 font-bold">{validationResult}</p>
        )}
        <button
          onClick={handleFormSubmit}
          className="text-white font-bold bg-red-600 rounded-lg w-full p-3 m-6"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm ? (
            <text>New to Netflix? Sign Up Now</text>
          ) : (
            <text>Already registered? SignIn</text>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
