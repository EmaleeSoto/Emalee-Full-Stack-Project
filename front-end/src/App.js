import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/gamers" element={<Index />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
