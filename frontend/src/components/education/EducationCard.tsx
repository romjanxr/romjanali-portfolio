import { Badge } from "lucide-react";
import { Education } from "../../types/education";

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg border border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${education.iconColor} rounded-lg flex items-center justify-center`}
        >
          <span className="text-white font-bold text-lg">{education.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{education.title}</h3>
          <p className="text-[#ff1744] font-medium">{education.subtitle}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="font-medium">{education.institution}</span>
          <span>•</span>
          <span>{education.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">{education.period}</span>
          {education.gpa && (
            <Badge
              className={
                education.iconColor.includes("ff1744")
                  ? "bg-[#ff1744] text-white"
                  : "bg-blue-500 text-white"
              }
            >
              GPA: {education.gpa}
            </Badge>
          )}
        </div>

        <p className="text-gray-400 text-sm">{education.description}</p>
      </div>
    </div>
  );
};
