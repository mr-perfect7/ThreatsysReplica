import mongoose from "mongoose";
import dotenv from "dotenv";

import Home from "./models/Home.js";
import About from "./models/About.js";
import CoreValue from "./models/CoreValue.js";
import Industry from "./models/Industry.js";
import Project from "./models/Project.js"; // 👈 filename check karna

dotenv.config();

const seedData = async () => {
  try {
    // 🔗 DB CONNECT
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected for Seeding");

    // 🧹 CLEAR OLD DATA
    await Home.deleteMany();
    await About.deleteMany();
    await CoreValue.deleteMany();
    await Industry.deleteMany();
    await Project.deleteMany();

    // 🏠 HOME
    await Home.create({
      heroTitle: "Threatsys Cyber Security",
      heroSubtitle: "Securing Digital Infrastructure for Tomorrow",
      heroImage: "hero.jpg",
      features: [
        {
          title: "Cyber Defense",
          description: "Advanced protection against cyber threats",
          icon: "shield",
        },
        {
          title: "Risk Management",
          description: "Identify and mitigate vulnerabilities",
          icon: "risk",
        },
        {
          title: "Compliance",
          description: "Industry standard security compliance",
          icon: "compliance",
        },
      ],
    });

    // ℹ️ ABOUT
    await About.create({
      heading: "About Threatsys",
      description:
        "Threatsys is a leading cyber security company focused on delivering cutting-edge digital security solutions for governments and enterprises.",
      image: "about.jpg",
    });

    // 💎 CORE VALUES
    await CoreValue.insertMany([
      {
        title: "Integrity",
        description: "We uphold the highest ethical standards",
        icon: "integrity",
      },
      {
        title: "Innovation",
        description: "Continuous improvement in security solutions",
        icon: "innovation",
      },
      {
        title: "Excellence",
        description: "Delivering quality-driven security services",
        icon: "excellence",
      },
    ]);

    // 🏭 INDUSTRIES
    await Industry.insertMany([
      {
        name: "Government",
        description: "Secure government digital assets",
        icon: "gov",
      },
      {
        name: "Banking & Finance",
        description: "Protect financial institutions from cyber risks",
        icon: "bank",
      },
      {
        name: "Healthcare",
        description: "Safeguard sensitive medical data",
        icon: "health",
      },
    ]);

    // 🚀 PROJECTS
    await Project.insertMany([
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
    ]);

    console.log("🎉 ALL DATA SEEDED SUCCESSFULLY");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    process.exit(1);
  }
};

seedData();
