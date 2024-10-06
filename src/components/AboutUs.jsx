// src/pages/AboutUs.jsx

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <img
        src="https://via.placeholder.com/150" // Replace with the owner's image URL
        alt="Owner"
        className="rounded-full mb-4"
      />
      <p className="text-center max-w-md mb-4">
        Welcome to our website! We are dedicated to providing the best products and services to our customers. Our mission is to create an exceptional shopping experience that meets your needs.
      </p>
      <p className="text-center max-w-md">
        Thank you for visiting our site. We hope you enjoy your shopping experience!
      </p>
    </div>
  );
};

export default AboutUs;
