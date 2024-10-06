import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Logo" 
            className="mr-2" 
          />
          <Link to="/" className="text-white text-xl font-bold">MyWebsite</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/products" className="text-white hover:text-blue-200">Products</Link>
        </div>

        {/* User Authentication Links */}
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center">
              <img 
                src={user.photoURL || "https://via.placeholder.com/40"} // User's image or default image
                alt={user.displayName || "User"} 
                className="rounded-full w-8 h-8 mr-2"
              />
              <span className="text-white mr-4">{user.displayName || user.email}</span>
              <button 
                onClick={logout} 
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
            >
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
