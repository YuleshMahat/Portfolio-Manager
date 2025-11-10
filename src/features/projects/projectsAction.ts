// src/store/actions/projectsActions.ts
import { toast } from "react-toastify";
import {
  getProjectApi,
  addProjectApi,
  ProjectForm,
  updateProjectApi,
  deleteProjectApi,
} from "./projectsApi";
import {
  addProject,
  deleteProject,
  Project,
  setLoading,
  setProjects,
  updateProject,
} from "./projectsSlice";
import { AppDispatch } from "@/redux/store";

// API response type (match your backend)
interface ApiResponse<T = any> {
  status: "success" | "error" | "info";
  message: string;
  projects?: T[];
  project?: T;
}

// Fetch all projects for a user
export const fetchProjectsAction =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));

      const result = await getProjectApi(userId);

      // THIS IS THE KEY FIX
      let projects: Project[] = [];

      if (result.status === "success") {
        // Handle both cases: result.projects OR result.data?.projects
        const rawProjects = result.projects || result.data?.projects || [];

        // Flatten just in case it's double-wrapped (Project[][])
        projects = Array.isArray(rawProjects)
          ? rawProjects.flat() // ← This removes Project[][] → Project[]
          : [];

        dispatch(setProjects(projects));
        toast.success(`Loaded ${projects.length} project(s)`);
      } else {
        toast.error(result.message || "Failed to load projects");
        dispatch(setProjects([]));
      }
    } catch (error: any) {
      toast.error("Network error. Please check your connection.");
      console.error("Fetch Projects Error:", error);
      dispatch(setProjects([]));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Add a new project
export const addProjectAction =
  (form: ProjectForm) => async (dispatch: AppDispatch) => {
    try {
      const result: ApiResponse<Project> = await addProjectApi(form);

      if (result.status === "success") {
        dispatch(addProject(result.project!));
        toast.success("Project added successfully!");
        return result;
      } else {
        toast.error(result.message || "Failed to add project");
        return result;
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      console.error("Add Project Error:", error);
      throw error;
    }
  };

export const updateProjectAction =
  (id: string, form: ProjectForm) => async (dispatch: AppDispatch) => {
    try {
      const result: ApiResponse<Project> = await updateProjectApi(id, form);

      if (result.status === "success") {
        dispatch(updateProject(result.project!));
        toast.success("Project updated successfully!");
        return result;
      } else {
        toast.error(result.message || "Failed to update project");
        return result;
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      console.error("Update Project Error:", error);
      throw error;
    }
  };

// features/projects/projectsAction.ts
export const deleteProjectAction =
  (projectId: string) => async (dispatch: AppDispatch) => {
    try {
      const result: ApiResponse<any> = await deleteProjectApi(projectId);

      if (result.status === "success") {
        dispatch(deleteProject(projectId));
        toast.success("Project deleted forever");
        return result;
      } else {
        toast.error(result.message || "Failed to delete");
      }
    } catch (error: any) {
      toast.error("Delete failed. Try again.");
      console.error("Delete Error:", error);
      throw error;
    }
  };
