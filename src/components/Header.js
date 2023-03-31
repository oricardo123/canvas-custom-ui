const Header = () => {
  return (
    <header className="bg-white-500 p-4 flex justify-between items-center">
      <img
        src="/"
        alt="canvas custom logo"
        className="text-black font-bold h-8"
      />
      <nav className="space-x-10">
        <a href="/" className="text-black hover:text-blue-300">
          Home
        </a>
        <a href="/about" className="text-black hover:text-blue-300">
          About
        </a>
        <a href="/catalogue" className="text-black hover:text-blue-300">
          Catalogue
        </a>
        <a href="/portfolio" className="text-black hover:text-blue-300">
          Portfolio
        </a>
        <a href="/contact" className="text-black hover:text-blue-300">
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
