// src/lib/api/projectsApi.ts
import { apiProcessor, apiUrl } from "@/utils-fe/apiProcessor";

export interface ProjectForm {
  name: string;
  image?: string;
  imageFile?: File | null;
  skills?: string[];
  github: string;
  live: string;
  description?: string;
  featured?: boolean;
}

// Get all projects for a user
export const getProjectApi = (userId: string) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/projects/${userId}`,
  });
};

// Add new project
export const addProjectApi = (form: FormData) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/projects`,
    data: form,
  });
};

// Update project
export const updateProjectApi = (id: string, form: Partial<ProjectForm>) => {
  return apiProcessor({
    method: "patch",
    url: `${apiUrl}/projects`,
    data: { id, ...form },
  });
};

// Delete project
export const deleteProjectApi = (id: string) => {
  return apiProcessor({
    method: "delete",
    url: `${apiUrl}/projects`,
    data: { projectId: id },
  });
};
