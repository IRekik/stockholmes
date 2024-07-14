const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-yellow-100">
      <a href="/" className="text-3xl font-semibold text-green-800 p-1">Stockholmes</a>
      <nav>
        <a href="/about" className="text-black hover:text-blue-700 mx-2">About</a>
        <a href="/register" className="text-black hover:text-blue-700 mx-2">Register</a>
        <a href="/login" className="text-black hover:text-blue-700 mx-2">Log In</a>
      </nav>
    </header>
  );
};

export default Header;