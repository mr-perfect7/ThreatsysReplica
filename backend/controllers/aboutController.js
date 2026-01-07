import About from "../models/About.js";

export const getAbout = async (req, res) => {
  const data = await About.findOne();
  res.json(data);
};
