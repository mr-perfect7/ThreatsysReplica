import mongoose from "mongoose";

const coreValueSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    icon: String
  },
  { timestamps: true }
);

export default mongoose.model("CoreValue", coreValueSchema);
