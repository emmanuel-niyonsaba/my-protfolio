const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-blue-950 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-blue-600">Dev Log</h1>
          <h2 className="text-gray-600 text-lg">Dev Name</h2>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-300 font-medium">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">About Me</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
          <li>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Chat With Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
