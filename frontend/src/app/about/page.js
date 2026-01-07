"use client";

import { useEffect, useState } from "react";
import { getAbout } from "@/services/api";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout();
        setAboutData(data);
      } catch (err) {
        setError("Failed to load About Us data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {/* Hero / Heading Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">{aboutData.heading}</h1>
        <p className="mt-4 text-gray-600 text-lg">{aboutData.description}</p>
      </section>

      {/* Image Section */}
      {aboutData.image && (
        <section className="my-12 flex justify-center">
          <img
            src={`/images/${aboutData.image}`}
            alt="About Us"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </section>
      )}
    </main>
  );
}
