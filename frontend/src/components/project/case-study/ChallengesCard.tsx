import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ProjectChallenges } from "@/types/project";

interface ChallengesCardProps {
  challenges: ProjectChallenges;
}

export const ChallengesCard: React.FC<ChallengesCardProps> = ({
  challenges,
}) => {
  return (
    <Card className="bg-[#242424] border-gray-700">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-[#ff1744]" />
          <CardTitle className="text-2xl text-white">
            {challenges.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {challenges.items.map((item, index) => (
            <div key={index} className="border-l-4 border-[#ff1744] pl-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.challenge}
              </h4>
              <p className="text-gray-400 leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
