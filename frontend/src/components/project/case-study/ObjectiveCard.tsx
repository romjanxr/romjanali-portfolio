import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle } from "lucide-react";
import { ProjectObjective } from "@/types/project";

interface ObjectiveCardProps {
  objective: ProjectObjective;
}

export const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ objective }) => {
  return (
    <Card className="bg-[#242424] border-gray-700">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-[#ff1744]" />
          <CardTitle className="text-2xl text-white">
            {objective.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-400 text-lg leading-relaxed">
          {objective.content}
        </p>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Key Goals:</h4>
          <ul className="space-y-2">
            {objective.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#ff1744] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
