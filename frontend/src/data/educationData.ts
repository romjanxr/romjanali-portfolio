import { Education, Certification, Skill } from "../types/education";

export const educationData: Education[] = [
  {
    id: 1,
    type: "formal",
    title: "Bachelor of Science",
    subtitle: "Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2026",
    gpa: "3.8/4.0",
    icon: "🎓",
    iconColor: "from-[#ff1744] to-[#d50000]",
    description:
      "Focused on software engineering, data structures, algorithms, and web development with hands-on projects.",
    side: "left",
  },
  {
    id: 2,
    type: "formal",
    title: "High School Certificate",
    subtitle: "Science Track",
    institution: "Pakshey Railway College",
    location: "Ishwardi, Pabna",
    period: "2014 - 2016",
    gpa: "4.00/5.00",
    icon: "🏫",
    iconColor: "from-blue-500 to-blue-600",
    description:
      "Completed Higher Secondary Certificate (HSC) in Science discipline, with a strong focus on Mathematics and Physics.",
    side: "right",
  },
];

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    provider: "freeCodeCamp",
    date: "2023",
    icon: "⚡",
    color: "from-green-500 to-green-600",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: 2,
    title: "React - The Complete Guide",
    provider: "Udemy",
    date: "2022",
    icon: "⚛️",
    color: "from-blue-500 to-blue-600",
    skills: ["React", "Redux", "React Router", "Hooks"],
  },
  {
    id: 3,
    title: "JavaScript Algorithms",
    provider: "freeCodeCamp",
    date: "2022",
    icon: "🧮",
    color: "from-yellow-500 to-yellow-600",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    date: "2023",
    icon: "☁️",
    color: "from-orange-500 to-orange-600",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
];

export const skillsData: Skill[] = [
  { skill: "JavaScript", level: 90, icon: "🟨" },
  { skill: "React.js", level: 85, icon: "⚛️" },
  { skill: "Node.js", level: 80, icon: "🟢" },
  { skill: "MongoDB", level: 75, icon: "🍃" },
  { skill: "HTML/CSS", level: 95, icon: "🎨" },
  { skill: "TypeScript", level: 70, icon: "🔷" },
];
