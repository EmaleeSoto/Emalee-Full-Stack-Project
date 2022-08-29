import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/gamers" element={<Index />} />
            <Route path="/gamers/:id" element={<Show />} />
            <Route path="/newprofile" element={<New />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
