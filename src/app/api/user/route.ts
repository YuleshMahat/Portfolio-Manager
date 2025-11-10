import { getUserDetails } from "@/controllers/userController";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return getUserDetails(req);
}
