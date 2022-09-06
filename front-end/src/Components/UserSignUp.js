import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

export default function SignUp({ setLogin }) {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user; //creates user
        console.log(user);
        alert("Account created!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, profile.email, profile.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Success!");
        navigate("/gamers");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
        alert(errorCode);
      });
  };
  return (
    <div className="sign-up-section">
      <label htmlFor="username">Username: </label>
      <input
        id="email"
        type="email"
        placeholder="Enter Email"
        onChange={handleTextChange}
        autoComplete="off"
        required
      />
      <br></br>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleTextChange}
        autoComplete="off"
        required
      />
      <br></br>
      <button id="create" onClick={signUp}>
        Create an Account
      </button>
      <button id="login" onClick={signIn}>
        Log into your Account
      </button>
    </div>
  );
}
