import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
        {/* Social Sign Up Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-black text-white p-3 rounded-md">Sign up with Apple</button>
          <button className="bg-blue-600 text-white p-3 rounded-md">Sign up with Google</button>
        </div>

        <div className="my-4 text-gray-500 text-center">Or sign up with email</div>

        {/* Sign Up Form */}
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" />
          <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" />
          <input type="password" placeholder="Password" className="border p-3 rounded-md w-full" />

          <button type="submit" className="bg-purple-600 text-white p-3 rounded-md mt-4">
            Sign Up
          </button>
        </form>

        {/* Link to Sign In */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/signin" className="text-purple-600 font-semibold">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
