const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center justify-between px-4 py-2 bg-yellow-100">
      <p className="text-lg font-semibold text-black">&copy; 2024 Stockholmes</p>
      <nav>
        <a href="/privacy" className="text-black hover:text-blue-700 mx-2">Privacy Policy</a>
        <a href="/terms" className="text-black hover:text-blue-700 mx-2">Terms of Service</a>
        <a href="/contact" className="text-black hover:text-blue-700 mx-2">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
