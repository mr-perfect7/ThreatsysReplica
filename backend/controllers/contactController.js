import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  await Contact.create(req.body);

  res.json({
    success: true,
    message: "Contact form submitted successfully"
  });
};
