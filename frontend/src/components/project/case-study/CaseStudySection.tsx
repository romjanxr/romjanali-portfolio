import { ProjectCaseStudy } from "@/types/project";
import { ObjectiveCard } from "./ObjectiveCard";
import { ChallengesCard } from "./ChallengesCard";
import { ToolsCard } from "./ToolsCard";
import { FeaturesCard } from "./FeaturesCard";
import { ResultsCard } from "./ResultsCard";

interface CaseStudySectionProps {
  caseStudy: ProjectCaseStudy;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  caseStudy,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Case <span className="text-[#ff1744]">Study</span>
      </h2>

      <div className="space-y-12">
        <ObjectiveCard objective={caseStudy.objective} />
        <ChallengesCard challenges={caseStudy.challenges} />
        <ToolsCard tools={caseStudy.tools} />
        <FeaturesCard features={caseStudy.features} />
        <ResultsCard results={caseStudy.results} />
      </div>
    </section>
  );
};
