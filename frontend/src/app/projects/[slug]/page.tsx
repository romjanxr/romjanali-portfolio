import { BackButton } from "@/components/ui/BackButton";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { TechnologiesSection } from "@/components/project/TechnologiesSection";
import { ScreenshotsSection } from "@/components/project/ScreenshotsSection";
import { CaseStudySection } from "@/components/project/case-study/CaseStudySection";
import { restmartProjectData } from "@/data/projectDetailsData";
import { notFound } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  // For now, we only have restmart project data
  // Later you can fetch based on params.slug
  const project =
    params.slug === "restmart-full-stack-e-commerce-platform"
      ? restmartProjectData
      : null;

  if (!project) {
    notFound();
  }

  console.log(params);

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <Navigation />
      <BackButton href="/#projects" label="Back to Projects" />
      <ProjectHeader project={project} />
      <TechnologiesSection technologies={project.technologies} />
      {project.screenshots && (
        <ScreenshotsSection screenshots={project.screenshots} />
      )}
      {project.caseStudy && <CaseStudySection caseStudy={project.caseStudy} />}
      <Footer />
    </div>
  );
}
