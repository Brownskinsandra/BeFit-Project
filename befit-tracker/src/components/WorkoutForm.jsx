import { useState } from "react";

const WorkoutForm = ({ onSaveWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !weight) return;

    // Save workout
    onSaveWorkout({ exercise, sets, reps, weight, date: new Date().toISOString() });

    // Clear form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Log Workout</h2>
      
      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Save Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
