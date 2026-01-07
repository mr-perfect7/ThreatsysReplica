"use client";

import { useState } from "react";
import { submitContact } from "@/services/api";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!form.name || !form.email || !form.message) {
      return setMsg("All fields are required.");
    }

    setLoading(true);
    try {
      const res = await submitContact(form);
      setMsg(res.message || "Form submitted successfully!");
      setForm({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      console.error(err);
      setMsg("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {msg && (
        <p
          className={`text-center mb-4 ${
            msg.includes("success") ? "text-green-600" : "text-red-500"
          }`}
        >
          {msg}
        </p>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-2 rounded h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
}
