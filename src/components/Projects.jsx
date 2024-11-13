import { GrProjects } from "react-icons/gr";
const projects = [
  {
    title: "To-Do App – CRUD Operations Journey",
    date: "Nov 2023 - Dec 2023",
    description:
      "This app serves as a showcase of my learning journey in implementing CRUD (Create, Read, Update, Delete) operations. It allows users to easily manage their to-dos with simple features for adding, viewing, and deleting tasks. The app is built using React JS and Tailwind CSS for a clean, responsive interface. It demonstrates core front-end concepts, including state management, and dynamic updates to the UI. This project highlights my understanding and practical application of building a task management system with basic CRUD functionality. ",
    imageUrl: "/todo.png",
    technologies: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://todos-react-app-one.vercel.app/",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform  ">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-52 md:h-56 lg:h-64 xl:h-72 object-cover select-none"
    />
    <div className="p-4 sm:p-6 md:p-8">
      <h3 className="text-lg text-md font-semibold selection-focus">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm selection-focus">{project.date}</p>
      <p className="text-gray-700 mt-2 text-sm selection-focus">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4 select-none">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center text-white bg-gray-950 hover:bg-gray-900 transition-colors px-3 sm:px-4 py-2 rounded-md text-sm select-none"
      >
        Demo
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="container">
      <div className="text-center space-y-4 mb-10 mt-6">
        <span className="s-p-button">
          <div className="flex items-center space-x-2 select-none">
            <span>Projects</span>
            <span>
              <GrProjects className="text-white" />
            </span>
          </div>
        </span>
        <h2 className="pro-con-heading text-spotlight">
          Check out my latest work
        </h2>
        <p className="pro-con-cont text-spotlight">
          Here are a few projects that showcase my skills and interests
        </p>
      </div>
      <div className="grid grid-cols-1  gap-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
