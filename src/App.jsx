import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import History from "./History";

function App() {
  const [fact, setFact] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 rounded-lg shadow p-6">
        <nav className="mb-6 flex gap-4 bg-gray-900 p-4 rounded-lg shadow-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 font-bold underline px-3 py-1 rounded transition"
                : "text-green-400 font-semibold hover:underline px-3 py-1 rounded transition"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 font-bold underline px-3 py-1 rounded transition"
                : "text-green-400 font-semibold hover:underline px-3 py-1 rounded transition"
            }
          >
            History
          </NavLink>
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
          <Route path="/history" element={<History history={history} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
