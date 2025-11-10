import { updateInfo } from "@/controllers/mainInfoController";
export async function PATCH(req: Request) {
  return updateInfo(req);
}
