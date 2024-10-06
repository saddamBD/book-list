const ImageSection = () => {
  const images = [
    { id: 1, src: 'https://via.placeholder.com/300', alt: 'Product 1' },
    { id: 2, src: 'https://via.placeholder.com/300', alt: 'Product 2' },
    { id: 3, src: 'https://via.placeholder.com/300', alt: 'Product 3' },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded shadow-md"
            />
            <p className="mt-2">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
