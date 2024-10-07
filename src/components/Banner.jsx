const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-24 md:py-32 px-4 md:px-0">
      <div className="container mx-auto text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Welcome to Our Product Store!
        </h1>
        <p className="text-lg md:text-xl font-light mb-8">
          Explore our wide range of products and find the perfect one for you.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
