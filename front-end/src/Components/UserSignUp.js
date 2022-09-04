import React from "react";
import { useState } from "react";

export default function () {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          placeholder="Enter Password"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
