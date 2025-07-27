import { Badge } from "@/components/ui/badge";

interface TechnologiesSectionProps {
  technologies: string[];
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  technologies,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-[#ff1744] text-[#ff1744] hover:bg-[#ff1744] hover:text-white px-4 py-2 text-sm"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
};
