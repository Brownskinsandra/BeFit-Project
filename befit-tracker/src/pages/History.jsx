import { useState, useEffect } from "react";

const History = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Load workouts from localStorage
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
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

export default History;
