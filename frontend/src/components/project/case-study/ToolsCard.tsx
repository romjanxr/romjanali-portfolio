import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectTools } from "@/types/project";

interface ToolsCardProps {
  tools: ProjectTools;
}

export const ToolsCard: React.FC<ToolsCardProps> = ({ tools }) => {
  const toolCategories = [
    { title: "Frontend", items: tools.frontend },
    { title: "Backend", items: tools.backend },
    { title: "Deployment", items: tools.deployment },
    { title: "Tools", items: tools.tools },
  ];

  return (
    <Card className="bg-[#242424] border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-white">{tools.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg font-semibold text-[#ff1744] mb-3">
                {category.title}
              </h4>
              <ul className="space-y-1">
                {category.items.map((tool, index) => (
                  <li key={index} className="text-gray-400">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
