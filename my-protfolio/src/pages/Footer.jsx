const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand / About */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400">EHDsDev</h1>
          <p className="mt-3 text-gray-400">
            Building modern web applications and providing reliable network
            maintenance services. Passionate about clean code and user-friendly
            digital solutions.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About Me</a></li>
            <li><a href="/skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/resume" className="hover:text-blue-400">Resume</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>Email: <span className="text-blue-300">emmy@example.com</span></li>
            <li>Phone: <span className="text-blue-300">+250 78X XXX XXX</span></li>
            <li>Location: Kigali, Rwanda</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400">🌐</a>
            <a href="#" className="hover:text-blue-400">🐙</a>
            <a href="#" className="hover:text-blue-400">📘</a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Emmanuel Niyonsaba — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
