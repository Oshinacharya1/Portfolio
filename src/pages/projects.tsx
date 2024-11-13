import TechStackIcons from "../pages/techStackIcons"; // TechStackIcons is inside 'pages' folder

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Created Weather Forecast App.",
      techStack: ["React", "JavaScript", "CSS", "GitHub", "VS Code"],
    },
    {
      title: "Project Two",
      description: "Built a personal portfolio website.",
      techStack: ["React", "React Router", "Tailwind CSS", "GitHub", "VS Code"],
    },
    {
      title: "Project Three",
      description: "Built a Schedule Manager App.",
      techStack: ["React", "JavaScript", "CSS", "GitHub", "VS Code"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 bg-opacity-35 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-white mb-4">{project.description}</p>
          <TechStackIcons techStack={project.techStack} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
