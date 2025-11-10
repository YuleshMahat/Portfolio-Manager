// middleware.ts at project root
import { authMiddleware } from "@/middlewares/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("middleware triggered for:", req.nextUrl.pathname);

  return authMiddleware(req); // authMiddleware should return NextResponse
}

export const config = {
  matcher: ["/auth/login"],
};
