"use client";

import { useEffect, useState } from "react";
import { getCoreValues } from "@/services/api";
import Card from "@/components/Card";
// ValueCard component
const ValueCard = ({ title, description }) => (
  <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default function CoreValuesPage() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const data = await getCoreValues();
        setValues(data);
      } catch (err) {
        setError("Failed to load Core Values");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchValues();
  }, []);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Our Core Values</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We follow these principles in everything we do.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {values.map((value, idx) => (
          <Card key={idx} {...value} />
        ))}
      </section>
    </main>
  );
}
