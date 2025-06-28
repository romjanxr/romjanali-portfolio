import { Skill } from "../../types/education";

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar = ({ skill }: SkillBarProps) => {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg border border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{skill.icon}</span>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">{skill.skill}</span>
            <span className="text-[#ff1744] text-sm font-bold">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#ff1744] to-[#d50000] h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
