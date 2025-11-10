import mongoose, { Document, Model } from "mongoose";

interface IMainInfo extends Document {
  userId: mongoose.Types.ObjectId;
  primaryInfo: string;
  secondaryInfo: string;
}

const mainInfoSchema = new mongoose.Schema<IMainInfo>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    primaryInfo: {
      type: String,
      required: true,
    },
    secondaryInfo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const mainInfo: Model<IMainInfo> =
  mongoose.models.mainInfo || mongoose.model("mainInfo", mainInfoSchema);

export default mainInfo;
