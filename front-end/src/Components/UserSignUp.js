import React from "react";

export default function () {
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input id="password" type="text" placeholder="Enter Pasword" required />
      </form>
    </div>
  );
}
