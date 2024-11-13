import { VscVscodeInsiders } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

interface TechStackIconsProps {
  techStack: string[];
}

const TechStackIcons: React.FC<TechStackIconsProps> = ({ techStack }) => {
  const techIcons: { [key: string]: JSX.Element } = {
    React: <FaReact className="w-5 h-5 text-blue-400" />,
    JavaScript: <TbBrandJavascript className="w-5 h-5 text-yellow-400" />,
    CSS: <SiTailwindcss className="w-5 h-5 text-blue-500" />,
    GitHub: <FaGithub className="w-5 h-5 text-gray-600" />,
    "VS Code": <VscVscodeInsiders className="w-5 h-5 text-blue-500" />,
    "React Router": <SiReactrouter className="w-5 h-5 text-red-600" />,
  };

  return (
    <div className="flex flex-wrap gap-3">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
        >
          {techIcons[tech]} <span className="ml-2">{tech}</span>
        </span>
      ))}
    </div>
  );
};

export default TechStackIcons;
