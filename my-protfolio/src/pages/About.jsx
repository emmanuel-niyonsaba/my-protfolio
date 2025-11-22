const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 py-20 px-6 md:px-20 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About Me
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Hello! I’m <span className="text-red-500 font-semibold">Emmanuel Niyonsaba</span>, a passionate junior software developer and networking technician.  
            I specialize in building **modern, user-friendly web applications** and providing **network maintenance and support**.  
            I enjoy learning new technologies and creating **digital solutions that make life easier**.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-700 mb-2">Development</h3>
              <p className="text-gray-600">
                React, Node.js, PHP, Tailwind CSS — building full-stack applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-700 mb-2">Networking</h3>
              <p className="text-gray-600">
                Network setup, maintenance, troubleshooting, and configuration.
              </p>
            </div>
          </div>

        </div>

        {/* Optional Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="src/images/profile-image.jpg"
            alt="About Me"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg border-4 border-blue-200"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
