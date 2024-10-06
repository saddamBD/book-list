

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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  if (!product) return <div className="text-center mt-10">No product found</div>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.author_img_url} alt={product.author_img_url} className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>
        <div className="space-y-4">
          <p className="text-lg font-medium text-gray-700">{product.details}</p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Price:</span> ${product.price}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Lessons:</span> {product.lession}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Students Enrolled:</span> {product.student}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Duration:</span> {product.duration} hours
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Assessments:</span> {product.assessments}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Author:</span> {product.author}
            </p>
            <p className="text-lg text-gray-900">
              <span className="font-semibold">Level:</span> {product.level}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://api-endpoints-xx8k.onrender.com/api/products/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch product details');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!product) return <div>No product found</div>;

//   return (
//     <div className="product-details">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <p>{product.details}</p>
//       <p className="text-lg font-semibold">Price: ${product.price}</p>
//       <p className="text-lg font-semibold">lession: ${product.lession}</p>
//       <p className="text-lg font-semibold">student: ${product.student}</p>
//       <p className="text-lg font-semibold">duration: ${product.duration}</p>
//       <p className="text-lg font-semibold">assessments: ${product.assessments}</p>
//       <p className="text-lg font-semibold">author: ${product.author}</p>
//       <p className="text-lg font-semibold">level: ${product.level}</p>
//     </div>
//   );
// };

// export default ProductDetails;
