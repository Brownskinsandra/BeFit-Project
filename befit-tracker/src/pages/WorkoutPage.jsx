import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkoutPage = () => {
  const { muscleGroup } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(`https://wger.de/api/v2/exercise/?language=2&limit=10`);
        const data = await response.json();
        
        // Filter exercises based on muscle group
        const filteredExercises = data.results.filter((exercise) => 
          exercise.category.name.toLowerCase() === muscleGroup.toLowerCase()
        );

        setExercises(filteredExercises);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, [muscleGroup]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
        {muscleGroup.toUpperCase()} Workouts
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading exercises...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold">{exercise.name}</h2>
              <p className="text-gray-600 mt-2">{exercise.description}</p>
              <video controls className="mt-4 rounded-md w-full">
                <source src={`https://example.com/videos/${exercise.id}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
