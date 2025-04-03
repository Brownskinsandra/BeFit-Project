import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-2 w-full fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-evenly items-center">
        <h1 className="text-lg font-bold">BeFit Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/log-workout" className="text-white hover:text-gray-300">Track</Link>
          <Link to="/history" className="text-white hover:text-gray-300">History</Link>
          <Link to="/workout-categories" className="text-white px-4 py-2">Workouts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
