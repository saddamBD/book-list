import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> 
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
