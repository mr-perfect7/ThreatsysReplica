"use client";
import { useEffect, useState } from "react";
import { getProjects } from "@/services/api";

export default function ProjectsCarousel() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
const COLOR_MAP = {
  "bg-green-600": "bg-green-600",
  "bg-blue-600": "bg-blue-600",
  "bg-purple-600": "bg-purple-600",
  "bg-red-600": "bg-red-600",
};

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

 if (!projects.length) {
  return (
    <section className="py-28 text-center text-white bg-[#0b0718]">
      <p className="opacity-70">No projects found.</p>
    </section>
  );
}


  const next = () =>
    setIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  return (
    <section className="bg-gradient-to-b from-[#0b0718] to-[#120c26] text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-xs tracking-widest text-cyan-400 uppercase">
          Expertise in 360 Degree Cyber Security Services
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-4xl font-semibold">
          We Accelerate Cyber Security transformation with innovation
          and trust with global brands.
        </h2>

        <div className="relative mt-20">
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl opacity-70 hover:opacity-100"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-2xl opacity-70 hover:opacity-100"
          >
            →
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${index * 320}px)`,
              }}
            >
              {projects.map((item) => (
              <div
                key={item._id}
                className={`min-w-[300px] h-[220px] rounded-xl p-6 flex flex-col justify-between shadow-xl ${
                  COLOR_MAP[item.color] || "bg-gray-700"
                }`}
              >

                  <p className="text-lg font-semibold">
                    {item.title}
                  </p>

                  <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-black text-xs">
                    Logo
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`w-8 h-1 rounded-full ${
                  i === index ? "bg-yellow-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
