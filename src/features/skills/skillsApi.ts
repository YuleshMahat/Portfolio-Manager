import { apiProcessor, apiUrl } from "@/utils-fe/apiProcessor";

export const getSkillsApi = (id: string) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/skills/${id}`,
  });
};
