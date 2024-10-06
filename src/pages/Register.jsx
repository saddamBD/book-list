import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext"; // Import AuthContext
import { auth } from "../firebase/firebase"; // Import Firebase auth
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const Register = () => {
  const { setUser } = useContext(AuthContext); // Get the setUser function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Set the user in context after successful registration
      setError(null); // Clear any errors
    } catch (error) {
      setError(error.message); // Set error if registration fails
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); 
    } catch (error) {
      setError(error.message); 
    }
  };

  const handleGithubRegister = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); 
      setError(null);
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleGoogleRegister}>Register with Google</button>
      <button onClick={handleGithubRegister}>Register with GitHub</button>
    </div>
  );
};

export default Register;
