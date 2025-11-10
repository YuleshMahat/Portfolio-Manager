import { parseJSON } from "@/lib/utils/parseJson";
import { findByFilter, updateByFilter } from "@/models/skills/skillModel";
import { NextResponse } from "next/server";

export const updateSkills = async (req: Request) => {
  try {
    const data = await parseJSON(req);
    const result = await updateByFilter(
      { userId: data.userId },
      { skills: data.skills }
    );
    return NextResponse.json(
      {
        status: "success",
        message: "Successfully added skills",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);

    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const getSkills = async (id: string) => {
  try {
    const result = await findByFilter({ userId: id });
    return NextResponse.json(
      {
        status: "success",
        message: "Successfully retrieved skills",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);

    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
};
