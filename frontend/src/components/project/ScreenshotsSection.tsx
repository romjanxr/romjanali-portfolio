import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProjectScreenshot } from "@/types/project";

interface ScreenshotsSectionProps {
  screenshots: ProjectScreenshot[];
}

export const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({
  screenshots,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl font-bold mb-8">Project Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((screenshot) => (
          <Card
            key={screenshot.id}
            className="bg-[#242424] border-gray-700 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={screenshot.image}
                alt={screenshot.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {screenshot.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {screenshot.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
