import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 w-full fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">BeFit Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/log-workout" className="text-white hover:text-gray-300">Log Workout</Link>
          <Link to="/history" className="text-white hover:text-gray-300">History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
