import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "http://github.com/romjanxr/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/md-romjan-ali/",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@LogicAndLayer",
      label: "Youtube",
    },
    { icon: Mail, href: "mailto:romjanvr5@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="blank"
          className="p-3 border border-gray-600 rounded-full hover:border-[#ff1744] hover:text-[#ff1744] transition-colors"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
