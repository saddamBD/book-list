const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <p className="mt-4 text-lg">Follow these simple steps to get started:</p>
        <ol className="mt-6 list-decimal list-inside">
          <li className="mt-2">Browse our product categories.</li>
          <li className="mt-2">Select a product you like.</li>
          <li className="mt-2">Add it to your cart and proceed to checkout.</li>
          <li className="mt-2">Create an account or log in.</li>
          <li className="mt-2">Complete your purchase and enjoy!</li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
