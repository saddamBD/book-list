// // src/components/AuthContext.jsx
// import { auth } from "../firebase/firebase"; // Ensure the correct path to your Firebase config
// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for validation

// // Create the AuthContext
// export const AuthContext = createContext();

// // AuthProvider component to manage user authentication state
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // State to hold user info

//   useEffect(() => {
//     // Listener for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser); // Update user state
//     });

//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children} {/* Render children components */}
//     </AuthContext.Provider>
//   );
// };

// // Define propTypes for validation
// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Ensure children prop is required
// };

// // Default export of AuthProvider
// export default AuthProvider;


// src/components/AuthContext.jsx
import { auth } from "../firebase/firebase"; // Ensure correct path
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define propTypes for validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
