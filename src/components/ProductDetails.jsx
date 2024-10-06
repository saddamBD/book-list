// 
// src/pages/ProductDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api-endpoints-xx8k.onrender.com/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="product-details">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.details}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
      <p className="text-lg font-semibold">lession: ${product.lession}</p>
      <p className="text-lg font-semibold">student: ${product.student}</p>
      <p className="text-lg font-semibold">duration: ${product.duration}</p>
      <p className="text-lg font-semibold">assessments: ${product.assessments}</p>
      <p className="text-lg font-semibold">author: ${product.author}</p>
      <p className="text-lg font-semibold">level: ${product.level}</p>
    </div>
  );
};

export default ProductDetails;
