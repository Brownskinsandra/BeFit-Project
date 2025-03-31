import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // ✅ Import Home page
import LogWorkout from "./pages/LogWorkout"; // ✅ Import LogWorkout page
import History from "./pages/History"; // ✅ Import History page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
