import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
        setUser(user);
      } else {
        setUser("");
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <section>
      {!user ? (
        <div>
          <h1 class="text-4xl text-center mt-5 mb-10">Welcome to Devesh's App</h1>
          <h2 class="text-3xl text-center m-5">New User?</h2>
          <div class="flex justify-center m-5">
            <button
              class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              <Link to="/signup" >

              SignUp
              </Link>
            </button>
          </div>
          <h2 class="text-3xl text-center m-5">Already a user?</h2>
          <div class="flex justify-center m-5">
            <button
              class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              <Link to="/login" >

              Login
              </Link>
            </button>
          </div>

        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center font-bold underline m-5">
            Hello world!
          </h1>

          <div class="flex justify-center m-5">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
