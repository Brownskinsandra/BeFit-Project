import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/gymbackground.jpg')" }}>
      <h1 className="text-4xl font-bold text-white">Workout That Get Better As You Do</h1>
      <p className="text-purple-600 text-lg text-center max-w-md mt-4">
        Reach your goal at home or at the gym with over 125+ programs designed just for you.
      </p>
      <Link to="/signup" className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
