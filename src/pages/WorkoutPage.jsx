import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Manually mapped videos for known exercises
const videoMap = {
  "Push-Up": "https://www.youtube.com/embed/IODxDxX7oi4",
  "Squat": "https://www.youtube.com/embed/aclHkVaku9U",
  "Deadlift": "https://www.youtube.com/embed/op9kVnSso6Q",
  "Bicep Curl": "https://www.youtube.com/embed/ykJmrZ5v0Oo",
  "Bench Press": "https://www.youtube.com/embed/gRVjAtPip0Y",
  "Plank": "https://www.youtube.com/embed/pSHjTRCQxIw",
  "Shoulder Press": "https://www.youtube.com/embed/qEwKCR5JCog",
  "Lunge": "https://www.youtube.com/embed/QOVaHwm-Q6U",
};

const WorkoutPage = () => {
  const { muscleGroup } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/exercises/bodyPart/${muscleGroup}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
              "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            },
          }
        );

        const data = await response.json();

        const sortedExercises = data
          .sort((a, b) => b.id - a.id) // Sort descending by ID (or any criteria you want)
          .map((exercise) => ({
            ...exercise,
            videoUrl: videoMap[exercise.name] || null,
          }));

        setExercises(sortedExercises);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
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
              <p className="text-gray-400 text-sm mt-2 capitalize">
                Equipment: {exercise.equipment}
              </p>

              {exercise.videoUrl ? (
                <div className="mt-4">
                  <iframe
                    className="w-full h-40 rounded-md"
                    src={exercise.videoUrl}
                    title={`How to do ${exercise.name}`}
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  No video available for this exercise.
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
