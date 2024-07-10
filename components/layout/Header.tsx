const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-yellow-100">
      <a href="/" className="text-lg font-semibold">Stockholmes</a>
      <nav>
        <a href="/" className="text-black-500 hover:text-blue-700 mx-2">Home</a>
        <a href="/about" className="text-black-500 hover:text-blue-700 mx-2">About</a>
        <a href="/contact" className="text-black-500 hover:text-blue-700 mx-2">Contact</a>
      </nav>
    </header>
  );
};

export default Header;