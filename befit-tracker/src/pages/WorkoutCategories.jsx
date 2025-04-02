import { Link } from "react-router-dom";

const WorkoutCategories = () => {
  const muscleGroups = [
    { name: "Chest", image: "/images/chest.jpg", path: "/workout/chest" },
    { name: "Back", image: "/images/back.jpg", path: "/workout/back" },
    { name: "Legs", image: "/images/legs.jpg", path: "/workout/legs" },
    { name: "Arms", image: "/images/arms.jpg", path: "/workout/arms" },
    { name: "Shoulders", image: "/images/shoulders.jpg", path: "/workout/shoulders" },
    { name: "Core", image: "/images/core.jpg", path: "/workout/core" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Select a Muscle Group</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {muscleGroups.map((muscle, index) => (
          <Link to={muscle.path} key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img src={muscle.image} alt={muscle.name} className="w-32 h-32 object-cover rounded-md mx-auto" />
            <h2 className="text-center text-lg font-semibold mt-2">{muscle.name}</h2>
          </Link>
        ))}
      </div>

      {/* "TRACK" Button */}
      <Link to="/log-workout" className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
        TRACK
      </Link>
    </div>
  );
};

export default WorkoutCategories;
