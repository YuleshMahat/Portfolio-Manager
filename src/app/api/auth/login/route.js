// src/app/api/auth/register/login.js
import { loginUser } from "@/controllers/authController";

export async function POST(req) {
  return loginUser(req);
}

export async function GET(req) {
  return getUserDetails();
}
