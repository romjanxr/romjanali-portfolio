import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#242424]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'd love to hear from you. Whether you have a question or want to
            work together, feel free to drop a message. I'll try my best to get
            back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#ff1744] h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#ff1744] h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#ff1744] resize-none"
                />
              </div>
              <Button className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-8 py-3 text-lg font-medium rounded-md w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div>
                <Image
                  src="/images/Emails-pana.png"
                  alt="Contact Illustration"
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
