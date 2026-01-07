"use client";

import { useEffect, useState } from "react";
import { getHome } from "@/services/api";
import Card from "@/components/Card";
import Link from "next/link";
import ProjectsCarousel from "@/components/ProjectsCarousel";


export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHome();
        setHomeData(data);
      } catch (err) {
        setError("Failed to load home data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-8 text-center">Loading...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
    <>
      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {homeData.heroTitle}
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              {homeData.heroSubtitle}
            </p>

            <div className="mt-8">
              <button
                onClick={() => alert("Feature coming soon")}
                className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full h-80 bg-slate-100 rounded-lg flex items-center justify-center border">
            <span className="text-slate-400 text-sm">Hero Image</span>
            

            
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Capabilities
            </h2>
            <p className="mt-4 text-slate-600">
              Cyber security services designed for modern digital threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {homeData.features.map((feature, idx) => (
              <Card key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["50+", "Enterprise Clients"],
            ["10+", "Years Experience"],
            ["24/7", "Security Monitoring"],
            ["100%", "Compliance Focus"],
          ].map(([value, label], idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
              <p className="mt-2 text-slate-600 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Industries We Serve
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Government", "Finance", "Healthcare", "IT & SaaS"].map(
              (item, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-white border rounded-full text-sm text-slate-700"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => alert("Industries page coming soon")}
              className="text-sm font-medium text-slate-900 underline"
            >
              View all industries
            </button>
          </div>
        </div>
      </section>
            {/* AWARDS / TRUST SECTION */}
<section className="bg-white border-t">
  <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
   

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-slate-900 leading-tight">
        THE BEST <br />
        CYBERSECURITY <br />
        COMPANY EVERYONE <br />
        TRUSTS BLINDLY!
      </h2>

      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-4">
          <span className="mt-1 text-amber-500">🛡️</span>
          <p className="text-slate-600">
            Honored with the{" "}
            <span className="font-semibold text-slate-900">
              “Excellence in Cyber Security”
            </span>{" "}
            award by Entrepreneur Magazine at Bangalore.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 text-amber-500">🏆</span>
          <p className="text-slate-600">
            Honored with the{" "}
            <span className="font-semibold text-slate-900">
              “Best Cyber Security Personality of the Year 2025”
            </span>{" "}
            award by a leading magazine.
          </p>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-1 text-amber-500">🏛️</span>
          <p className="text-slate-600">
            Partner with the{" "}
            <span className="font-semibold text-slate-900">
              Government of Odisha
            </span>{" "}
            to showcase the state’s growth and potential to the world.
          </p>
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE PLACEHOLDER */}
    <div className="w-full h-[420px] bg-slate-100 rounded-xl flex items-center justify-center border">
      <span className="text-slate-400 text-sm">
        <img
  src="/placeholder.jpg"
  alt="Threatsys Award"
  className="w-full h-full object-cover rounded-xl"
/>

      </span>
    </div>
  </div>
</section>
 <ProjectsCarousel />
      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Secure Your Business Today
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Partner with experts who understand cyber risk and compliance.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-amber-500 text-slate-900 text-sm font-semibold rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
