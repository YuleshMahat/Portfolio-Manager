// src/app/api/auth/register/route.js
import { registerUser } from "@/controllers/authController";

export async function POST(req) {
  return registerUser(req);
}
