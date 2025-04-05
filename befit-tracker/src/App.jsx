import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import WorkoutCategories from "./pages/WorkoutCategories";
import LogWorkout from "./pages/LogWorkout";
import History from "./pages/History";
import WorkoutPage from "./pages/WorkoutPage"; // ✅ Import dynamic workout page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/workout-categories" element={<WorkoutCategories />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/workout/:muscleGroup" element={<WorkoutPage />} /> {/* ✅ Dynamic Route */}
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
