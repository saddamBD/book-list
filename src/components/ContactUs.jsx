import { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    alert('Message sent! Thank you for contacting us.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-700 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-white">
        Get In Touch With Us
      </h1>
      <p className="text-lg mb-6 max-w-lg text-center">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-3 rounded-lg shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
