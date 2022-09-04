import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SignUp from "./Pages/SignUp";
import DeleteModal from "./Components/DeleteModal";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gamers" element={<Index />} />
            <Route path="/gamers/:id" element={<Show />} />
            <Route path="/newprofile" element={<New />} />
            <Route path="/gamers/:id/edit" element={<Edit />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/deleted-profile" element={<DeleteModal />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
