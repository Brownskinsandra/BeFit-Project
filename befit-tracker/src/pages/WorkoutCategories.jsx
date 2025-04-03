import { Link } from "react-router-dom";

const WorkoutCategories = () => {
  const muscleGroups = [
    { name: "Chest", image: "/images/chest.jpg", path: "/workout/chest" },
    { name: "Back", image: "/images/back.jpg", path: "/workout/back" },
    { name: "Legs", image: "/images/legs.jpg", path: "/workout/legs" },
    { name: "Arms", image: "/images/arms.jpg", path: "/workout/arms" },
    { name: "Glutes", image: "/images/glutes.jpg", path: "/workout/glutes" },
    { name: "Core", image: "/images/core.jpg", path: "/workout/core" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Select a Muscle Group</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {muscleGroups.map((muscle, index) => (
          <Link to={muscle.path} key={index} className="relative w-40 h-40 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
            <img src={muscle.image} alt={muscle.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-lg font-bold">{muscle.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* "TRACK" Button */}
      <Link to="/log-workout" className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700">
        TRACK
      </Link>
    </div>
  );
};

export default WorkoutCategories;
