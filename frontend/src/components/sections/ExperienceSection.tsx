import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { experienceData } from "@/src/data/experienceData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-[#ff1744]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my
            development skills
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience) => (
            <Card
              key={experience.id}
              className="bg-[#242424] border-gray-700 hover:border-[#ff1744]/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">
                      {experience.position}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                      <span className="font-medium text-[#ff1744]">
                        {experience.company}
                      </span>
                      <span className="hidden sm:block">•</span>
                      <span>{experience.location}</span>
                      <span className="hidden sm:block">•</span>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-300 w-fit"
                      >
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {experience.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  {experience.description}
                </p>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#ff1744] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-700 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
