export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap CSS",
    "Git/GitHub",
    "NPM",
    "React",
    "MongoDB",
    "Node.js",
    "Express JS",
    "MySQL",
    "Python",
    "Firebase",
    "C/C++",
  ];
  return (
    <div className="container">
      <h2 className="mb-2 pro-con-heading heading selection-glow">Skills</h2>
      <p className="pro-con-cont mb-2 selection-glow">
        Here’s a quick look at my technical skills, which encompass both
        front-end and back-end development.
      </p>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#171717] text-[#FAFAFA] s-p-button select-none"
          >
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
