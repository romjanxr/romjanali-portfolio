import { Badge } from "./badge";

export default function TechStack() {
  const frontendTech = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "ShadCN UI",
  ];

  const backendTech = [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "JWT Authentication",
  ];

  const tools = [
    "VS Code",
    "Git & GitHub",
    "Docker (Basic)",
    "Postman",
    "Vercel",
    "Render",
    "Linux",
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-300 font-medium">
        Here Are The List of Technologies I am Using :
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-[#ff1744] font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontendTech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[#ff1744] text-[#ff1744] hover:bg-[#ff1744] hover:text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#ff1744] font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {backendTech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[#ff1744] text-[#ff1744] hover:bg-[#ff1744] hover:text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#ff1744] font-semibold mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[#ff1744] text-[#ff1744] hover:bg-[#ff1744] hover:text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
