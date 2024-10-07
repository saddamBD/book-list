const HowItWorks = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          How It Works
        </h2>
        <p className="text-xl text-white mb-10">
          Follow these simple steps to get started:
        </p>
        <ol className="space-y-4 text-left text-white font-medium text-lg md:text-xl">
          <li className="bg-white/20 rounded-lg p-4 shadow-lg">
            <span className="font-bold mr-2">1.</span> Browse our product categories.
          </li>
          <li className="bg-white/20 rounded-lg p-4 shadow-lg">
            <span className="font-bold mr-2">2.</span> Select a product you like.
          </li>
          <li className="bg-white/20 rounded-lg p-4 shadow-lg">
            <span className="font-bold mr-2">3.</span> Add it to your cart and proceed to checkout.
          </li>
          <li className="bg-white/20 rounded-lg p-4 shadow-lg">
            <span className="font-bold mr-2">4.</span> Create an account or log in.
          </li>
          <li className="bg-white/20 rounded-lg p-4 shadow-lg">
            <span className="font-bold mr-2">5.</span> Complete your purchase and enjoy!
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
