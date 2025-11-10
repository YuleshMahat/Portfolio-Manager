import { getSkills } from "@/controllers/skillsController";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return getSkills(id);
}
