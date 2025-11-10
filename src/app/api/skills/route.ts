import { updateSkills } from "@/controllers/skillsController";

export async function PATCH(req: Request) {
  return updateSkills(req);
}
