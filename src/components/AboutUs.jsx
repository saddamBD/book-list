const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">About Us</h1>
      <img
        src="src/assets/me.png" 
        alt="Owner"
        className="rounded-full mb-6 shadow-lg"
        height={150}
        width={150}
      />
      <p className="text-center max-w-lg mb-6 text-lg text-gray-700 leading-relaxed">
        Welcome to our website! We are dedicated to providing the best products and services to our customers. 
        Our mission is to create an exceptional shopping experience that meets your needs.
      </p>
      <p className="text-center max-w-lg text-lg text-gray-700 leading-relaxed">
        Thank you for visiting our site. We hope you enjoy your shopping experience!
      </p>
    </div>
  );
};

export default AboutUs;

