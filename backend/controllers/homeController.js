import Home from "../models/Home.js";

export const getHome = async (req, res) => {
  try {
    const data = await Home.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Home data error" });
  }
};
