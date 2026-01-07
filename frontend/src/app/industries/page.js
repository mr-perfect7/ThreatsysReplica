"use client";

import { useEffect, useState } from "react";
import { getIndustries } from "@/services/api";

// IndustryCard component
const IndustryCard = ({ name, description }) => (
  <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default function IndustriesPage() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const data = await getIndustries();
        setIndustries(data);
      } catch (err) {
        setError("Failed to load Industries");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchIndustries();
  }, []);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Government & Industries</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We provide cybersecurity solutions to these sectors.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {industries.map((industry, idx) => (
          <IndustryCard key={idx} {...industry} />
        ))}
      </section>
    </main>
  );
}
