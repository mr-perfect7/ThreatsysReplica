import CoreValue from "../models/CoreValue.js";

export const getCoreValues = async (req, res) => {
  const data = await CoreValue.find();
  res.json(data);
};
