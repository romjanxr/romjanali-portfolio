export interface ProjectScreenshot {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectTools {
  title: string;
  frontend: string[];
  backend: string[];
  deployment: string[];
  tools: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectObjective {
  title: string;
  content: string;
  goals: string[];
}

export interface ProjectChallenges {
  title: string;
  items: ProjectChallenge[];
}

export interface ProjectResults {
  title: string;
  metrics: ProjectMetric[];
  achievements: string[];
}

export interface ProjectCaseStudy {
  objective: ProjectObjective;
  challenges: ProjectChallenges;
  tools: ProjectTools;
  features: string[];
  results: ProjectResults;
}

// Update your existing Project interface
export interface Project {
  id: number;
  title: string;
  subtitle?: string; // Add if not exists
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  status?: string; // Add if not exists
  duration?: string; // Add if not exists
  team?: string; // Add if not exists
  completedDate?: string; // Add if not exists
  technologies: string[];
  screenshots?: ProjectScreenshot[]; // Add if not exists
  caseStudy?: ProjectCaseStudy; // Add if not exists
}
