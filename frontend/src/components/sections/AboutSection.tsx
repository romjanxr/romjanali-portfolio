import Image from "next/image";
import TechStack from "../ui/TechStack";
import SocialLinks from "../ui/SocialLinks";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#242424]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/romjan.jpg"
                  alt="About Me Illustration"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Romjan Ali, a passionate Full Stack Web Developer with a
                strong foundation in Python, Django, Django REST Framework, and
                modern frontend tools like React.js and Tailwind CSS. With a
                background as a Senior Computer Science Instructor, I've taught
                hundreds of students the core principles of programming and web
                development. Now, I apply those same principles to build clean,
                scalable, and secure web applications. From designing RESTful
                APIs to building responsive user interfaces, I enjoy
                transforming complex ideas into practical solutions. I follow
                best practices in both backend and frontend development and
                always strive to learn and adapt to new technologies.
              </p>
            </div>
            <TechStack />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
