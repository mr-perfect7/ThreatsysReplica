import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};
