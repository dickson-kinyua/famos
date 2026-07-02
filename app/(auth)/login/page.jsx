import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold">
              Welcome Back
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Sign In To Your <br />
              <span className="text-yellow-400">Account</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-7">
              Welcome back to Famos Engineering. Sign in to access your
              dashboard, manage your account, and explore our services.
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-800">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input type="checkbox" className="accent-yellow-400" />
                  Remember Me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-yellow-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gray-700"></div>
                <span className="text-sm text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>

              {/* Social Logins */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  <FaGoogle className="text-red-500" />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-[#1877F2] text-white font-medium hover:bg-[#166fe5] transition"
                >
                  <FaFacebookF />
                  Continue with Facebook
                </button>
              </div>

              <p className="text-center text-gray-400 text-sm pt-2">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-yellow-400 hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
