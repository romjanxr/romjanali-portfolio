const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export const projectsApi = {
  getProjects: async () => {
    const response = await fetch(`${BASE_URL}/projects/`);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
  },

  getProjectBySlug: async (slug: string) => {
    const response = await fetch(`${BASE_URL}/projects/${slug}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }
    return response.json();
  },
};
