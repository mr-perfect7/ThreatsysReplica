import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    heading: String,
    description: String,
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
