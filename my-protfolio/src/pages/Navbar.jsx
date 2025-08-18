


import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-blue-950 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-blue-600">EHDsDev</h1>
          <h2 className="text-gray-600 text-lg">Emmyson</h2>
        </div>

        {/* Navigation Links */}
        <div className="">
          <Link  className="hover:text-blue-600 transition-colors cursor-pointer">Home</Link>
          <Link className="hover:text-blue-600 transition-colors cursor-pointer">About Me</Link>
          <Link className="hover:text-blue-600 transition-colors cursor-pointer">Skills</Link>
          <Link className="hover:text-blue-600 transition-colors cursor-pointer">Projects</Link>
          <Link className="hover:text-blue-600 transition-colors cursor-pointer">Resume</Link>
          <Link className="hover:text-blue-600 transition-colors cursor-pointer">Contact</Link>
          <Link>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Chat With Me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
