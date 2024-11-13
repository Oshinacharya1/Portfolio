function projects() {
  const projects = [
    {
      title: "Project One",
      description: "Created Weather Fortecast App.",
      techStack: "React, JavaScript, CSS, GitHub, VS Code",
    },
    {
      title: "Project Two",
      description: "Build a personal portfolio website.",
      techStack: "React, React Router, Tailwind CSS, GitHub, VS Code",
    },
    {
      title: "Project Three",
      description: "Build a Schadule Manager App.",
      techStack: "React, JavaScript, CSS, GitHub, VS Code",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {project.techStack}
          </span>
        </div>
      ))}
    </div>
  );
}

export default projects;
