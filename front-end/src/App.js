import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./Components/Nav";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import DeleteModal from "./Components/DeleteModal";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import NotFound from "./Pages/NotFound";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setLogin(true);
    } else {
      // No user is signed in.
      setLogin(false);
    }
  });

  const signOutOfAccount = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("You have signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="App">
      <Router>
        <header>
          <Nav signOut={signOutOfAccount} loggedIn={loggedIn} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gamers" element={<Index />} />
            <Route path="/gamers/:id" element={<Show loggedIn={loggedIn} />} />
            <Route path="/newprofile" element={<New />} />
            <Route path="/gamers/:id/edit" element={<Edit />} />
            <Route path="/sign-in" element={<SignIn setLogin={setLogin} />} />
            <Route path="/sign-up" element={<SignUp setLogin={setLogin} />} />
            <Route path="/deleted-profile" element={<DeleteModal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
