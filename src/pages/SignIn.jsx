import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Into Your Account</h2>

        {/* Social Sign In Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-black text-white p-3 rounded-md">Sign in with Apple</button>
          <button className="bg-blue-600 text-white p-3 rounded-md">Sign in with Google</button>
        </div>

        <div className="my-4 text-gray-500 text-center">Or sign in with email</div>

        {/* Sign In Form */}
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" />
          <input type="password" placeholder="Password" className="border p-3 rounded-md w-full" />

          <button type="submit" className="bg-purple-600 text-white p-3 rounded-md mt-4">
            Sign In
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-purple-600 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
