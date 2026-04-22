"use client";
import { useState } from "react";
import { API } from "@/lib/api";

export default function Create() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await fetch(`${API}/prompts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(form)
    });

    alert("Prompt created");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Prompt</h2>

      <input
        className="w-full border p-2 mb-2"
        placeholder="Title"
        onChange={e => setForm({...form, title: e.target.value})}
      />

      <input
        className="w-full border p-2 mb-2"
        placeholder="Description"
        onChange={e => setForm({...form, description: e.target.value})}
      />

      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Prompt Text"
        onChange={e => setForm({...form, promptText: e.target.value})}
      />

      <button className="bg-black text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}