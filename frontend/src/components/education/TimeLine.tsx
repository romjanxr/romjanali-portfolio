import { Education } from "../../types/education";
import { TimelineItem } from "./TimeLineItem";

interface TimelineProps {
  educationItems: Education[];
}

export const Timeline = ({ educationItems }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#ff1744] to-transparent"></div>

      <div className="space-y-12">
        {educationItems.map((education) => (
          <TimelineItem key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
};
