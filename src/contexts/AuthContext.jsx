import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  getIdTokenResult,
} from "firebase/auth";
import { auth } from "@/config/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);

      if (firebaseUser) {
        // Retry getting token with admin claim (handles token refresh delay)
        let tokenResult;
        let hasAdminClaim = false;

        for (let attempt = 0; attempt < 5; attempt++) {
          if (attempt > 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
          }

          try {
            tokenResult = await getIdTokenResult(firebaseUser, true);
            if (tokenResult.claims.admin === true) {
              hasAdminClaim = true;
              break;
            }
          } catch (error) {
            console.error("Error getting token:", error);
          }
        }

        if (hasAdminClaim) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || "Admin User",
          });
        } else {
          // No admin claim - sign out
          await signOut(auth);
          setUser(null);
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      // Just sign in - let onAuthStateChanged handle validation
      await signInWithEmailAndPassword(auth, email, password);

      // Return success immediately
      // Navigation will happen when user state updates
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);

      // Handle specific Firebase errors
      let errorMessage = "Login failed. Please try again.";

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-credential"
      ) {
        errorMessage =
          "No account found with this email. Click 'Create Account' below to sign up first.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please try again later.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const _userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await signOut(auth);
      return {
        success: false,
        error: "Account created. Ask an admin to grant access, then sign in.",
      };
    } catch (error) {
      console.error("Registration error:", error);

      let errorMessage = "Registration failed. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Account already exists. Please sign in instead.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
