import { apiProcessor, apiUrl } from "@/utils-fe/apiProcessor";

export const getSkillsApi = (id: string) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/skills/${id}`,
  });
};

export const deleteSkillApi = (userId: string, skills: string[]) => {
  return apiProcessor({
    method: "patch",
    url: `${apiUrl}/skills`,
    data: { userId, skills }, // body for DELETE request
  });
};
