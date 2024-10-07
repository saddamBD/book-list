const ImageSection = () => {
  const images = [
    { id: 1, src: 'src/assets/img2.jpg', alt: 'Product 1' },
    { id: 2, src: 'src/assets/img4.jpg', alt: 'Product 2' },
    { id: 3, src: 'src/assets/img5.jpg', alt: 'Product 3' },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-slate-700 bottom-2">
      <h2 className="text-2xl font-bold mb-4 text-white">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded shadow-md"
            />
            <p className="mt-2 text-white">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
