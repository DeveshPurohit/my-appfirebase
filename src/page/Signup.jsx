import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1 className="text-4xl text-center mt-5 mb-10">Devesh's App</h1>
            <div className="flex flex-col items-center justify-center ">
              <form className="bg-white p-10 rounded-lg shadow-lg" onSubmit={onSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email-address"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  SignUp
                </button>
              </form>
            </div>

            
            <div className="flex justify-center m-4">
            <p>Or</p>
            </div>
            <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGoogleLogin}>
  Sign in with Google
  </button>
</div>
<div className="flex justify-center m-4">
            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>

          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
