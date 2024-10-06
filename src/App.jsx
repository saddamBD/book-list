import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> 
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products/:id" element={<ProductDetails />}
          />
          <Route 
            path="/products" 
            element={
              <ProtectedRoute>
                <Products />
                 <Footer />
              </ProtectedRoute>
            } 
          />
           <Route 
            path="/products/:id" 
            element={
              <ProtectedRoute>
                <ProductDetails /> 
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
