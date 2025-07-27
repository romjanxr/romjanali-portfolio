import { useQuery } from "@tanstack/react-query";
import { projectsApi } from "@/lib/api";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: projectsApi.getProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (Garbage Collection Time)
  });
};

export const useProjectDetails = (slug: string) => {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => projectsApi.getProjectBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
