import { deleteSkillApi, getSkillsApi } from "./skillsApi";

export const handleGetSkillsAction = async (id: string) => {
  const result = await getSkillsApi(id);
  return result;
};

// src/features/skills/skillsAction.ts
export const updateSkillsAction = async (
  userId: string,
  skill: string[]
): Promise<{
  status: "success" | "error";
  message?: string;
  skills: any;
}> => {
  const result = await deleteSkillApi(userId, skill);
  const skills = await handleGetSkillsAction(userId);
  const skillsArray = skills.data.skills;
  console.log(skillsArray);
  return {
    status: result.status,
    message: result.message,
    skills: skillsArray,
  };
};
