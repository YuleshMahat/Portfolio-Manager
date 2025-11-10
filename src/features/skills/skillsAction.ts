import { getSkillsApi } from "./skillsApi";

export const handleGetSkillsAction = async (id: string) => {
  const result = await getSkillsApi(id);
  return result;
};
