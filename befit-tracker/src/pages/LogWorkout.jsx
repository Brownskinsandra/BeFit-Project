import { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";

const LogWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  // Load saved workouts from localStorage on page load
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
  }, []);

  // Save workouts to localStorage whenever the list changes
  useEffect(() => {
    if (workouts.length > 0) {
      localStorage.setItem("workouts", JSON.stringify(workouts));
    }
  }, [workouts]);

  const saveWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="p-4">
      <WorkoutForm onSaveWorkout={saveWorkout} />
      
      <h2 className="text-lg font-bold mt-4">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <ul className="mt-2">
          {workouts.map((w, index) => (
            <li key={index} className="border p-2 rounded my-2">
              {w.date.split("T")[0]} - {w.exercise} ({w.sets} sets, {w.reps} reps, {w.weight}kg)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogWorkout;
