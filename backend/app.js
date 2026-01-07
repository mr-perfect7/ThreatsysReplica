import express from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import coreValueRoutes from "./routes/coreValueRoutes.js";
import industryRoutes from "./routes/industryRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://threatsys-replica-jp3c2e5e0-mr-perfect7s-projects.vercel.app" // live frontend
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cors())
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/core-values", coreValueRoutes);
app.use("/api/industries", industryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

export default app;
