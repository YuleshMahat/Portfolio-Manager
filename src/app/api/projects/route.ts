import {
  addNewProject,
  deleteAProject,
  getProjects,
  updateAProject,
} from "@/controllers/projectsController";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return addNewProject(req);
}

export async function DELETE(req: NextRequest) {
  return deleteAProject(req);
}

export async function PATCH(req: NextRequest) {
  return updateAProject(req);
}
