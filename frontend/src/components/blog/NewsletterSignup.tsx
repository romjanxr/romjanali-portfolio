"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#242424]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with My{" "}
          <span className="text-[#ff1744]">Latest Posts</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Get notified when I publish new articles about web development,
          tutorials, and tech insights.
        </p>

        {isSubscribed ? (
          <div className="max-w-md mx-auto p-4 bg-green-900/20 border border-green-500 rounded-lg">
            <p className="text-green-400 font-medium">
              Thanks for subscribing! 🎉
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#ff1744] h-12 flex-1"
            />
            <Button
              type="submit"
              className="bg-[#ff1744] hover:bg-[#d50000] text-white border-0 px-8 py-3 font-medium rounded-md"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
