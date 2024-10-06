import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); // Navigate to the home page after logout
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white text-center">
      <div className="flex items-center">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 mr-2" />
        <h1 className="text-lg font-bold">Books Showcase</h1>
      </div>
      <div className="flex space-x-4 text-center items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        {user ? (
          <div className="flex items-center">
            <img src={user.photoURL} alt={user.displayName} className="h-8 w-8 rounded-full mr-2" />
            <span>{user.displayName}</span>
            <button onClick={handleLogout} className="ml-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Login/Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
