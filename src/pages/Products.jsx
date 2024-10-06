// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api-endpoints-production.up.railway.app/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;


