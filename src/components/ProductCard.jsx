// src/components/ProductCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Check if the product and img_url exist before rendering
  const imageUrl = product?.img_url || 'https://via.placeholder.com/150'; // Fallback image in case img_url is missing

  return (
    <div className="border p-4 rounded shadow">
      {/* Render the image with proper alt text */}
      <img
        src={imageUrl}
        alt={product?.title || 'Product Image'} // Add fallback alt text
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{product?.title || 'Product Title'}</h2>
      <p className="text-gray-600">{product?.details || 'No details available'}</p>
      <p className="text-gray-800 font-bold mt-2">Price: ${product?.price || 'N/A'}</p>
      <Link to={`/products/${product._id}`} className="text-blue-500">View Details</Link>

    </div>
  );
};

// Define prop types for the ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    img_url: PropTypes.string,
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired, // product is required
};

export default ProductCard;
