import { SectionHeaderProps } from "../../types/education";

export const SectionHeader = ({
  title,
  subtitle,
  highlight,
}: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title} <span className="text-[#ff1744]">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
