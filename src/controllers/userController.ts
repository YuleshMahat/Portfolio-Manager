import { NextRequest, NextResponse } from "next/server";

export const getUserDetails = async (req: NextRequest) => {
  const userHeader = req.headers.get("x-user");
  if (!userHeader) {
    return NextResponse.json(
      { status: "error", message: "User not found!" },
      { status: 404 }
    );
  }

  const user = JSON.parse(userHeader);

  return NextResponse.json({
    status: "success",
    message: "User details fetched successfully",
    user,
  });
};
