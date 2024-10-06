const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold">Contact Us</h4>
        <p>Email: saddam.doct@gmail.com</p>
        <p>Phone: 01750261639</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
