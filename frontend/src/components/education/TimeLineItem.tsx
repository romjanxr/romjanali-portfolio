import { EducationCard } from "./EducationCard";
import { Education } from "../../types/education";

interface TimelineItemProps {
  education: Education;
}

export const TimelineItem = ({ education }: TimelineItemProps) => {
  const isLeft = education.side === "left";

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#ff1744] rounded-full border-4 border-[#242424] z-10"></div>

      <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8 md:items-center">
        {/* Left Side Content */}
        <div
          className={`${isLeft ? "md:text-right md:pr-8" : "hidden md:block"}`}
        >
          {isLeft && <EducationCard education={education} />}
        </div>

        {/* Right Side Content */}
        <div className={`${!isLeft ? "md:pl-8" : "hidden md:block"}`}>
          {!isLeft && <EducationCard education={education} />}
        </div>
      </div>
    </div>
  );
};
