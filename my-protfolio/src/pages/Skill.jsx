

const Skill = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Skill Card */}
        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Frontend Development</h2>
          <ul className="text-gray-700 space-y-1">
            <li>React</li>
            <li>JavaScript / ES6+</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Backend Development</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PHP / Laravel</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Networking Skills</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Network Maintenance</li>
            <li>Network Troubleshooting</li>
            <li>Router & Switch Configuration</li>
            <li>LAN/WAN Setup</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skill;
