// import mongoose from "mongoose";

// const homeSchema = new mongoose.Schema({
//   hero: {
//     title: String,
//     subtitle: String,
//     image: String
//   },
//   features: [
//     { title: String, desc: String, icon: String }
//   ]
// });

// export default mongoose.model("Home", homeSchema);
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroSubtitle: String,
    heroImage: String,
    features: [
      {
        title: String,
        description: String,
        icon: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Home", homeSchema);
