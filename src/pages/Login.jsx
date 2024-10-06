import { useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { auth } from "../firebase/firebase";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Email/Password login
  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/products"); // Redirect to Products page
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/products");
    } catch (err) {
      setError("Google login failed.");
      console.error("Google login failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle GitHub login
  const handleGithubLogin = async () => {
    setError(null);
    setLoading(true);
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/products");
    } catch (err) {
      setError("GitHub login failed.");
      console.error("GitHub login failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 mb-4"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        
        <div className="text-center my-4">OR</div>
        
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 mb-4"
        >
          {loading ? "Logging in..." : "Login with Google"}
        </button>
        
        <button
          onClick={handleGithubLogin}
          disabled={loading}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          {loading ? "Logging in..." : "Login with GitHub"}
        </button>
      </div>
    </div>
  );
};

export default Login;
