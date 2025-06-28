import {
  certificationsData,
  educationData,
  skillsData,
} from "@/src/data/educationData";
import { SectionHeader } from "../education/SectionHeader";
import { Timeline } from "../education/TimeLine";
import { CertificationCard } from "../education/CertificationCard";
import { SkillBar } from "../education/SkillBar";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#242424]">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <SectionHeader
          title="My"
          highlight="Education"
          subtitle="Academic background and continuous learning journey that built my foundation"
        />

        {/* Timeline Layout */}
        <Timeline educationItems={educationData} />

        {/* Certifications Section */}
        <div className="mt-20">
          <SectionHeader
            title="Certifications &"
            highlight="Achievements"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <SectionHeader title="Technical" highlight="Skills" subtitle="" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <SkillBar key={skill.skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
