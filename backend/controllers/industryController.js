import Industry from "../models/Industry.js";

export const getIndustries = async (req, res) => {
  const data = await Industry.find();
  res.json(data);
};
