import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "Dashboard"
import History from "./History";

function App() {
  const [fact, setFact] = useState("");
  const [error, setError] = useState("");
   const [history, setHistory] = useState([]);



  return (
    <BrowserRouter>
      <nav className="mb-4 flex gap-4">
        <Link to="/" className="text-green-400">dashboard</Link>
        <Link to="/history" className="text-green-400">History</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              fact={fact}
              setFact={setFact}
              error={error}
              setError={setError}
              history={history}
              setHistory={setHistory}
            />
          }
        />
        <Route
          path="/history"
          element={<History history={history} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
