import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { ProjectResults } from "@/types/project";

interface ResultsCardProps {
  results: ProjectResults;
}

export const ResultsCard: React.FC<ResultsCardProps> = ({ results }) => {
  return (
    <Card className="bg-[#242424] border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-white">{results.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#ff1744] mb-2">
                {metric.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {results.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#ff1744] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
