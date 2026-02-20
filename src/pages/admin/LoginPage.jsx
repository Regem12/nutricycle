import React, { useState, useEffect } from "react";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const { user, loading, login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate when user is authenticated
  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || "/admin/dashboard";
      navigate(from, { replace: true });
    } else if (loginAttempted && !loading && !user) {
      // Login was attempted, auth finished processing, but no user = no admin claim
      setError("Admin access required. You do not have admin privileges.");
      setIsLoading(false);
      setLoginAttempted(false);
    }
  }, [user, loading, loginAttempted, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    // Attempt login or signup
    const result = isSignupMode
      ? await register(email, password)
      : await login(email, password);

    if (!result.success) {
      setError(
        result.error ||
          `${isSignupMode ? "Signup" : "Login"} failed. Please try again.`,
      );
      setIsLoading(false);
      setLoginAttempted(false);
    } else {
      // Mark that login was attempted - wait for auth state to update
      setLoginAttempted(true);
    }
    // If success, keep loading until user state updates and navigation happens
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Title Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            NutriCycle Admin
          </h1>
          <p className="text-gray-600 text-base">
            Sign in to access the admin dashboard
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/60 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400"
                  placeholder="admin@nutricycle.com"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {isSignupMode ? "Creating account..." : "Signing in..."}
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  {isSignupMode ? "Create Admin Account" : "Sign In"}
                </>
              )}
            </button>
          </form>

          {/* Toggle between login and signup */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              {isSignupMode ? "Already have an account?" : "First time setup?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignupMode(!isSignupMode);
                  setError("");
                }}
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                {isSignupMode ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors inline-flex items-center gap-1"
          >
            ← Back to main site
          </Link>
        </div>
      </div>
    </div>
  );
}
