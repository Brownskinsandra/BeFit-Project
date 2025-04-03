import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkoutPage = () => {
  const { muscleGroup } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://wger.de/api/v2/exercise/?language=2&muscles=${muscleGroup}`
        );
        const data = await response.json();
        
        // Rank exercises (assuming effectiveness can be determined by API data)
        const rankedExercises = data.results.sort((a, b) => b.rating - a.rating);
        
        // Fetch videos dynamically (using a placeholder for now)
        const exercisesWithVideos = rankedExercises.map((exercise) => ({
          ...exercise,
          videoUrl: `https://www.youtube.com/embed?search_query=${exercise.name.replace(", ", "+")}+exercise`
        }));
        
        setExercises(exercisesWithVideos);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, [muscleGroup]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center capitalize">
        Best {muscleGroup} Workouts
      </h1>
      <p className="text-center text-gray-300 my-4">
        Discover the best exercises for strengthening your {muscleGroup} with proper form.
      </p>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{exercise.name}</h2>
              <p className="text-gray-400 text-sm">{exercise.description}</p>
              {/* Dynamic Video Embedding */}
              <div className="mt-4">
                <iframe
                  className="w-full h-40 rounded-md"
                  src={exercise.videoUrl}
                  title={`How to do ${exercise.name}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
