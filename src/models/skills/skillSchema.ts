import mongoose, { Document, Model } from "mongoose";

export interface ISkills extends Document {
  userId: mongoose.Types.ObjectId;
  skills: string[];
}

const skillsSchema = new mongoose.Schema<ISkills>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    skills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Skills: Model<ISkills> =
  mongoose.models.skills || mongoose.model("skills", skillsSchema);

export default Skills;
