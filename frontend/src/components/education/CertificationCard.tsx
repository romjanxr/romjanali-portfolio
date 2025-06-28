import { Certification } from "../../types/education";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard = ({
  certification,
}: CertificationCardProps) => {
  return (
    <Card className="bg-[#2a2a2a] border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300 group hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${certification.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
          >
            {certification.icon}
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff1744] transition-colors">
              {certification.title}
            </h4>

            <div className="flex items-center justify-between mb-3">
              <p className="text-[#ff1744] font-medium text-sm">
                {certification.provider}
              </p>
              <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                {certification.date}
              </span>
            </div>

            <div className="flex flex-wrap gap-1">
              {certification.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-gray-700 text-gray-300 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
