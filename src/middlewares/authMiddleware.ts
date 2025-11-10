import { decodeAccessToken } from "@/lib/utils/jwt";
import { findByFilter } from "@/models/auth/authModel";
import { NextRequest, NextResponse } from "next/server";

export const authMiddleware = async (req: NextRequest) => {
  try {
    const accessToken = req.headers.get("authorization");
    console.log(accessToken);
    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized" },
        { status: 401 }
      );
    }

    let decoded = decodeAccessToken(accessToken);

    let user = await findByFilter({ email: decoded.email });
    if (user) {
      delete user.password;
      const response = NextResponse.next();
      response.headers.set("x-user", JSON.stringify(user));
      return response;
    } else {
      return NextResponse.json(
        { status: "error", message: "Unauthorized" },
        { status: 401 }
      );
    }
  } catch (err) {
    let errorMessage = err.message.includes("jwt expire")
      ? err.message
      : "Server Error";

    let statusCode = err.message.includes("jwt expire") ? 401 : 500;
    return NextResponse.json(
      { message: errorMessage, status: "error" },
      { status: statusCode }
    );
  }
};
