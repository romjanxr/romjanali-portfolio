import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                Welcome to my world
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I am <span className="text-[#ff1744]">Romjan Ali</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Full Stack Developer
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Full Stack Developer passionate about building scalable and secure
              web applications. Experienced in Django, DRF, PostgreSQL, and
              React.js, with a strong background in designing RESTful APIs and
              optimizing database performance. Formerly a Senior CS Instructor,
              I'm now seeking a full-time Software Developer role.
            </p>
            <Button className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-8 py-3 text-lg font-medium rounded-md">
              Resume
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div>
                <Image
                  src="/images/herobanner.png" //?height=300&width=300"
                  alt="Developer Illustration"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
