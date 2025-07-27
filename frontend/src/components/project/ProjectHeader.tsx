import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <Badge className="bg-[#ff1744] text-white hover:bg-[#d50000] mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            {project.subtitle && (
              <h2 className="text-xl text-gray-300 mb-6">{project.subtitle}</h2>
            )}
            <p className="text-gray-400 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-6 py-3"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Link>
            </Button>
          </div>

          {(project.duration || project.team) && (
            <div className="grid grid-cols-2 gap-4 pt-6">
              {project.duration && (
                <div className="bg-[#242424] p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-[#ff1744]" />
                    <span className="text-sm text-gray-400">Duration</span>
                  </div>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              )}
              {project.team && (
                <div className="bg-[#242424] p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-[#ff1744]" />
                    <span className="text-sm text-gray-400">Team</span>
                  </div>
                  <p className="font-semibold">{project.team}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
