import mongoose from "mongoose";

const industrySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    icon: String
  },
  { timestamps: true }
);

export default mongoose.model("Industry", industrySchema);
