import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "./firebase/auth";
import { useAuth } from "../../../contexts/authContext";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to="/home" replace={true} />}
      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
          <div className="text-center">
            <div className="mt-2">
              <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                Welcome Back
              </h3>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600 font-bold">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-bold">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b-2"
              />
            </div>
            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-500 transition ${
                isSigningIn ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
          <div className="flex flex-row items-center text-center w-full">
            <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
            <div className="text-sm font-bold">OR</div>
            <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
          </div>
          <button
            disabled={isSigningIn}
            onClick={onGoogleSignIn}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24V28.4328H37.7926C36.8036 32.6902 33.4076 35.7078 28.9995 36.9024V42.6656H35.8335C42.0977 37.6899 47.532 31.2985 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L33.0646 36.9024C30.6467 38.2581 27.5261 38.9993 24 38.9993C17.2595 38.9993 11.9112 34.4161 9.99973 28.6006H2.04199V34.6101C6.08292 43.0103 14.6032 48.0016 24 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M9.99973 28.6006C9.28573 26.153 9.28573 23.4148 9.99973 20.9672V14.9577H2.04199C0.0659684 19.2988 0.0659684 24.269 2.04199 28.6101L9.99973 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.457 6.32036C36.4067 2.61598 30.9545 0.00164669 24 0.00164669C14.6032 0.00164669 6.08292 4.99294 2.04199 13.3931L9.99973 20.9672C11.9112 15.1517 17.2595 10.5685 24 10.5685V9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {isSigningIn ? "Signing In..." : "Continue with Google"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
