// Project Types

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

// Project Details Types

export type ProjectScreenshot = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export type ProjectObjective = {
  title: string;
  content: string;
  goals: string[];
};

export type ProjectChallengeSolution = {
  challenge: string;
  solution: string;
};

export type ProjectChallenges = {
  title: string;
  items: ProjectChallengeSolution[];
};

export type ProjectTools = {
  title: string;
  frontend: string[];
  backend: string[];
  deployment: string[];
  tools: string[];
};

export type ProjectResults = {
  title: string;
  metrics?: string[];
  achievements: string[];
};

export type ProjectCaseStudy = {
  objective: ProjectObjective;
  challenges: ProjectChallenges;
  tools: ProjectTools;
  features: string[];
  results: ProjectResults;
};

export type ProjectDetails = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  status: string;
  duration: string;
  team: string;
  completedDate: string;
  technologies: string[];
  screenshots: ProjectScreenshot[];
  caseStudy: ProjectCaseStudy;
};
