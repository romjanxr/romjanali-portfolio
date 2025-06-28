export interface Education {
  id: number;
  type: "formal" | "informal";
  title: string;
  subtitle: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  icon: string;
  iconColor: string;
  description: string;
  side: "left" | "right";
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Skill {
  skill: string;
  level: number;
  icon: string;
}

export interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle: string;
}
