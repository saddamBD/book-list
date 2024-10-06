import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Check if the product and img_url exist before rendering
  const imageUrl = product?.img_url || 'https://via.placeholder.com/150'; // Fallback image in case img_url is missing

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
      {/* Render the image with proper alt text */}
      <img
        src={imageUrl}
        alt={product?.title || 'Product Image'} // Add fallback alt text
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">{product?.title || 'Product Title'}</h2>
        {/* Two-line clamp for description */}
        <p className="text-gray-600 line-clamp-2">{product?.details || 'No details available'}</p>
        <p className="text-lg font-semibold text-gray-900 mb-4">Price: ${product?.price || 'N/A'}</p>
        <Link 
          to={`/products/${product._id}`} 
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
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

