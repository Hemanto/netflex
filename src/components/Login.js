import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInform] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0   text-white">
        <h1 className="font-blod text-3xl py-4 my-4">
          {isSignInFrom ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInFrom && (
          <input
            type="text"
            placeholder="User Name"
            className="p-4 my-4 w-full
          bg-gray-700
          "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full
          bg-gray-700
          "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4
          w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full">
          {isSignInFrom ? "Sign Up" : "Sign in"}
        </button>

        <p onClick={toggleSignInForm} className="m-2">
          {isSignInFrom
            ? "Already Register? Sign In"
            : "New To NetFlix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
