import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Recent <span className="text-[#ff1744]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="
                bg-[#242424] border-gray-700 hover:border-[#ff1744]/50
                transition-all duration-300
                group
                flex flex-col h-full
              "
            >
              <div
                className="
                  w-full h-[200px] overflow-hidden p-2
                  relative
                  group // This div is the group for the image hover effect
                "
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={600}
                  className="
                    w-full h-auto object-cover
                    transition-transform duration-5000 ease-in-out
                    group-hover:[transform:translateY(-80%)]
                    group-hover:[-webkit-transform:translateY(-80%)]
                    will-change-transform
                  "
                />
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-[#ff1744] transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* CardContent now only contains the technologies and grows to fill space */}
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* CardFooter contains the buttons and will always be at the bottom */}
              <CardFooter className="flex gap-2 p-6 pt-0">
                <Button
                  size="sm"
                  className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 flex-1"
                >
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
