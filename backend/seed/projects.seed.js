import mongoose from "mongoose";
import Project from "../models/Project.js";
import connectDB from "../config/db.js";

const projects = [
  {
    title: "CERT-in Cyber Security Audit of Krushak Odisha",
    color: "bg-green-600",
    order: 1,
  },
  {
    title: "Cyber Security Testing for Union Bank of Nigeria",
    color: "bg-blue-700",
    order: 2,
  },
  {
    title: "CM Dashboard Odisha CERT-in Cyber Security Audit",
    color: "bg-rose-600",
    order: 3,
  },
  {
    title:
      "Securing 1.2Cr BSKY Card Holders Data under Biju Swasthya Kalyan Yojana",
    color: "bg-yellow-400",
    order: 4,
  },
    {
    title: "CERT-in Cyber Security Audit of Krushak Odisha",
    color: "bg-green-600",
    order: 5,
  },
  {
    title: "Cyber Security Testing for Union Bank of Nigeria",
    color: "bg-blue-700",
    order: 6,
  },
  {
    title: "CM Dashboard Odisha CERT-in Cyber Security Audit",
    color: "bg-rose-600",
    order: 7,
  },
  {
    title:
      "Securing 1.2Cr BSKY Card Holders Data under Biju Swasthya Kalyan Yojana",
    color: "bg-yellow-400",
    order: 8,
  },
];

const seedProjects = async () => {
  await connectDB();
  await Project.deleteMany();
  await Project.insertMany(projects);
  console.log("✅ Projects seeded");
  process.exit();
};

seedProjects();
